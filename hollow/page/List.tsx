import {getContents} from "@bysir/hollow";
import {articleRoute, sortBlog} from "../util";
import {defaultContents} from "../initial_data";
import Link from "../component/Link";

let contents = getContents('contents',
    {
        sort: sortBlog,
        page: 1,
        size: 20,
    }
).list

console.log('contents:',JSON.stringify(contents))
if (contents.length == 0) {
    contents = defaultContents
}


export default function List() {
return <div className="pt-32">
    <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Animation</h1>
        <span>63 Articles</span>
    </div>

    <div className="grid grid-cols-2 gap-10 mt-4">
        {
            contents.map(item=>{
                let link = articleRoute(item)
                return <Link
                    href={link}
                    className="card group  bg-white block">
                    <div className="card-body">
                        <h2 className="card-title group-hover:text-primary">{item.name}</h2>
                        <div className="mt-4">{item.meta.desc}</div>
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
