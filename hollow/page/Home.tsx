import BlogBig from "../component/BlogBig";
import Container from "../component/Container";

import {getContents} from "@bysir/hollow"
import {sortBlog} from "../util";
import {defaultContents} from "../initial_data";

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

const projectList= [
    {
        cover:'https://cdn.pixabay.com/photo/2022/11/22/10/37/house-7609267_960_720.jpg',
        title:'3d全景工具',
        desc:'threejs、web3d',
        url:'http://admin-vuetify.bysir.top:1080/#/editor-3d/view'
    },
    {
        cover:'https://cdn.pixabay.com/photo/2021/01/25/07/04/hearts-5947464_960_720.png',
        title:'电子请帖',
        desc:'vue、movable',
        url:'https://inv.lmrone.top/'
    }
]

const news=[
    {
        cover:'',
        url:'https://www.ruanyifeng.com/blog/2022/12/weekly-issue-235.html',
        title:'  科技爱好者周刊（第 235 期）：青年失业率与选择创业'
    }
]
export default function Home() {
    return <section>
        <div className='grid grid-cols-2 gap-10'>
            <div className="">
                <h3 className={'text-xl font-bold p-2  border-b border-gray-200 '}>Side Project</h3>
                <div className="project grid grid-cols-2 mt-4 gap-4">
                    {
                        projectList.map(item=>
                            <a href={item.url} target='_blank' className="project-item">
                                <img className={'w-full h-48 object-cover object-center rounded-lg'} src={item.cover} alt=""/>
                                <div className="text-base py-1">{item.title}</div>
                                <div>{item.desc}</div>
                            </a>
                        )
                    }


                </div>
            </div>
            <div>
                <h3 className={'text-xl font-bold  p-2  bg-red-50'}>最近阅读</h3>
                <div className="blog">
                    {
                        news.map(item=>
                            <a className="blog-item py-2  block"  href={item.url} target="_blank">
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
