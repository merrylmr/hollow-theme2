import BlogBig from "../component/BlogBig";
import Container from "../component/Container";

import hollow, {getContents} from "@bysir/hollow"
import {articleRoute, sortBlog, sortTag} from "../util";
import {defaultContents, defaultProjectList,  defaultConfig} from "../initial_data";
import Link from "../component/Link";

let contents = getContents('contents',
    {
        sort: sortBlog,
        page: 1,
        size: 20,
        tree: false
    }
).list

// console.log('contents:',JSON.stringify(contents))

if (contents.length == 0) {
    contents = defaultContents
}

let params = hollow.getConfig() || {};
const projectList = params.projectList || defaultProjectList


let tags = []
contents.forEach(i => {
    let items = i.meta?.tags;
    if (items) {
        tags = tags.concat(items)
    }
})

tags = sortTag(tags).slice(0, 10)


export default function Home() {
    return <section className={'pt-16 px-4'}>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-24'>
            <div className={'sm:col-span-2'}>
                <div className={' flex items-center'}>
                    <h3 className={'text-base  text-pink-500  font-medium tracking-wider'}>
                        RECENTLY PUBLISHED
                    </h3>
                </div>
                <div className="blog mt-8">
                    {

                        contents.map(item => {
                            let link = articleRoute(item)
                            return <Link className="blog-item py-2  block group"
                                      href={link}>
                                <h3 className={'text-xl font-bold group-hover:text-primary'}>  {item.name}</h3>
                                <div className={'my-4 text-base line-clamp-3  leading-7'}>
                                    {item.getContent({pure: true}).substr(0, 150)+'......'}
                                </div>
                                <div className={'text-base font-medium flex items-center'}>
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor"
                                         className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100">
                                        <path strokeLinecap="round"
                                              className="stroke-current group-hover:text-primary"
                                              strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                                    </svg>
                                </div>
                            </Link>
                            }
                        )
                    }
                </div>

            </div>

            <div className="">
                <div>
                    <h3 className={'text-base  text-pink-500 font-medium tracking-wider'}>
                        TOP CATEGORIES
                    </h3>
                    <div className="flex flex-wrap  mt-8 -mb-3">
                        {
                            tags.map(i => (
                                <Link href={"/tags" + '/' + i[0]}
                                      className={"tag mb-3 relative inline-block px-3 py-1  text-sm mr-3"}>
                                    <div className="absolute -z-1 tag-bg opacity-30 transform  duration-200"></div>
                                    {i[0]}
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className="mt-10 sticky top-4">
                    <div className={' flex items-center'}>
                        <h3 className={'text-base  text-pink-500 font-medium tracking-wider'}>
                            SIDE PROJECT
                        </h3>
                    </div>
                    <div className="sm:-ml-8 mt-8">
                        {
                            projectList.map(item =>
                                <a href={item.url} target='_blank'
                                   className="group block flex items-center mb-4">
                                    <div className="mr-2 transition-ml transform duration-200 group-hover:translate-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor"
                                             className="w-6 h-6">
                                            <path className="text-primary" strokeLinecap="round" strokeLinejoin="round"
                                                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                                        </svg>
                                    </div>
                                    <div className="text-lg"> {item.title}</div>
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>

    </section>
}
