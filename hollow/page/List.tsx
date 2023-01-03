import {getContents} from "@bysir/hollow";
import {articleRoute, sortBlog} from "../util";
import {defaultContents} from "../initial_data";
import Link from "../component/Link";


function ListOne(props) {
    return <div className="pt-32 max-w-screen-lg mx-auto w-4/5">
        <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">{props?.title || 'Posts'}</h1>
            <span>{props.contents?.length} Articles</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4">
            {
                props.contents.map(item => {
                    let link = articleRoute(item)
                    return <Link
                        href={link}
                        className="card group  card-bg block">
                        <div className="card-body">
                            <h2 className="card-title group-hover:text-primary">{item.name}</h2>
                            <div className="mt-4">
                                {item.getContent({pure: true}).substr(0, 150)+'......'}
                            </div>
                            <div className={'text-base font-bold flex items-center mt-4'}>
                                Read more
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor"
                                     className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100">
                                    <path strokeLinecap="round"
                                          className="stroke-current group-hover:text-primary"
                                          strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                                </svg>
                            </div>
                        </div>
                    </Link>
                })
            }
        </div>
    </div>
}

export default function List(props) {
    let contents = getContents(props?.path || 'contents',
        {
            sort: sortBlog,
            page: 1,
            size: 20,
            tree: props?.tree || false
        }
    ).list


    if (contents.length == 0) {
        contents = defaultContents
    }

    if (props.tree) {
        return <>
            {
                contents.map(dir => {
                    if (dir.children.length > 0) {
                        return <ListOne
                            title={dir.name}
                            path={props.path}
                            contents={dir.children}
                        ></ListOne>
                    } else {
                        return <></>
                    }
                })
            }
        </>
    } else {
        return <ListOne
            title={props.title}
            contents={contents}
        ></ListOne>
    }


}
