import {dateFormat} from "../util";
import Link from "../component/Link";

interface Props {
    name: string,
    content: string
    meta?: any
}

export default function BlogDetail(props: Props) {
    let tags = props.meta?.tags
    let name = props.meta?.title || props.name

    return <div className="relative">
        <div className="absolute w-full h-16 bg-muted -top-16 left-0"></div>
        <div className="bg-muted sticky top-0 h-16 z-10"></div>
        <div className="pt-12 pb-12 bg-muted">
            <div className="max-w-screen-lg mx-auto w-4/5">
                <div className="text-sm breadcrumbs opacity-80">
                    <ul>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/blog/'}>Blog</Link></li>
                        <li> <Link href={`/blog/${props.meta.category}`}>
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
            <div className="
            prose dark:prose-invert
            prose-img:rounded-lg
            prose-pre:text-xs
            prose-code:text-xs prose-code:px-2 prose-code:py-1
            max-w-screen-lg mx-auto w-4/5">
                <div className="flex flex-wrap space-x-3 mb-8">
                    <div><span className="">{dateFormat(new Date(props.meta?.date), "mm-dd / YY")}</span></div>
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
        </div>
    </div>

}
