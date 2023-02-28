import {dateFormat} from "../util";
import Link from "../component/Link";
import {Toc} from "../component/Toc";
import {Content} from "@bysir/hollow";

export default function BlogDetail(props: Content) {
    let tags = props.meta?.tags
    let name = props.meta?.title || props.name
    console.log('props:', JSON.stringify(props))
    return <div className="relative">
        <div className="absolute w-full h-16 bg-muted -top-16 left-0"></div>
        <div className="bg-muted sticky top-0 h-16 z-10"></div>
        <div className="pt-12 pb-12 bg-muted">
            <div className="max-w-screen-lg mx-auto md:w-4/5 w-full">
                <div className="text-sm breadcrumbs opacity-80">
                    <ul>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/blog/'}>Blog</Link></li>
                        <li><Link href={`/blog/${props.meta.category}`}>
                            {props.meta.category ? props.meta.category.substr(0, 1).toLocaleUpperCase() + props.meta.category.substr(1) : ''
                            }
                        </Link>
                        </li>
                    </ul>
                </div>
                <h1 className="text-4xl pt-2"> {name} </h1>
            </div>
        </div>
        <div className="bg-color sticky top-0 h-16 z-10"></div>
        <div className="flex justify-center	bg-color">
            <div className="max-w-screen-lg mx-auto w-full  md:w-4/5  flex ">
                <div className="
                    prose dark:prose-invert
                    prose-img:rounded-lg
                    prose-pre:text-xs
                    prose-code:text-xs prose-code:px-2 prose-code:py-1
                    w-full flex-auto
                    max-w-3xl
                 "
                >
                    <div className="flex flex-wrap space-x-3 mb-8">
                        <div>
                            <span className="">{dateFormat(new Date(props.meta?.date), "mm-dd / YY")}</span></div>
                        {
                            tags?.map(i => (
                                <div
                                    className="bg-gray-600 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium text-white inline-block">
                                    <span>{i}</span>
                                </div>
                            ))
                        }
                    </div>

                    <div dangerouslySetInnerHTML={{__html: props.content}}></div>

                </div>
                {/* toc */}
                {props.toc?.length ? <div className="w-72 hidden md:block pl-4 relative flex-none">
                    <div className="sticky top-16 py-5 max-h-screen overflow-auto overscroll-none">
                        <Toc items={props.toc}/>
                    </div>
                </div> : null}
            </div>
        </div>
    </div>

}
