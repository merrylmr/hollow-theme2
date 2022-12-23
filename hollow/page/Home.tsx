import BlogBig from "../component/BlogBig";
import Container from "../component/Container";

import hollow, {getContents} from "@bysir/hollow"
import {articleRoute, sortBlog} from "../util";
import {defaultContents, defaultProjectList, defaultNews, defaultConfig} from "../initial_data";

let contents = getContents('contents',
    {
        sort: sortBlog,
        page: 1,
        size: 20,
    }
).list

if (contents.length == 0) {
    contents = defaultContents
}

let params = hollow.getConfig() || {};
const projectList = params.projectList || defaultProjectList
const news = params.news || defaultNews

export default function Home() {
    return <section>

        <div className='grid grid-cols-3 gap-10'>
            <div className={'col-span-2'}>
                <div className={' flex items-center'}>
                    <h3 className={'text-2xl flex items-center'}>
                        Blog
                    </h3>
                </div>
                <div className="blog">
                    {

                        contents.map(item => {
                                let link = articleRoute(item)
                                return <a className="blog-item py-2 flex justify-between items-center block"
                                          href={link} target="_blank">
                                    {item.name}
                                    <span className={'text-xs opacity-60'}>{item.meta.date}</span>
                                </a>
                            }
                        )
                    }
                </div>

                <div className="mt-10">
                    <div className={' flex items-center'}>
                        <h3 className={'text-2xl flex items-center'}>
                            Side Project


                        </h3>
                        <a className={'flex items-center'}>

                        </a>
                    </div>
                    <div className="not-prose grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-2">
                        {
                            projectList.map(item =>
                                <a href={item.url} target='_blank'
                                   className="card card-compact hover:bg-base-200 transition-all duration-200 hover:-translate-y-1">
                                    <figure className={'px-4 pt-4'}>
                                        <img
                                            className={'border-base-content bg-base-300 rounded-lg border border-opacity-5 h-40'}
                                            src={item.cover} alt=""/>
                                    </figure>
                                    <div className="card-body">
                                        <div className="card-title">{item.title}</div>
                                        <div className={'text-xs opacity-60'}>{item.desc}</div>
                                    </div>
                                </a>
                            )
                        }


                    </div>
                </div>
            </div>

            <div>
                <div className={' flex items-center   '}>
                    <h3 className={'text-2xl flex items-center  p-1'}>
                        最近阅读
                    </h3>
                </div>
                <div className="border-t border-gray-300 mt-2">
                    {
                        news.map(item =>
                            <a className=" py-2  block" href={item.url} target="_blank">
                                {item.title}
                            </a>
                        )
                    }
                </div>
            </div>
        </div>

        <div className="divider"></div>
    </section>
}
