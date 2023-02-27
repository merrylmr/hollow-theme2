import {getContents} from "@bysir/hollow";
import {sortBlog, articleRoute} from "../util";


let contents = getContents('contents/book',
    {
        sort: sortBlog,
        page: 1,
        size: 20,
        tree: false
    }
).list

export default function Book() {
    console.log('contents:', JSON.stringify(contents))

    return <div className="container w-4/5  mx-auto  mt-16 overflow-x-auto min-h-screen">
        <table className="table table-compact w-full"
               id="bookList">
            <thead>
            <tr className="border-b-2 border-gray-50">
                <th></th>
                <th>类型</th>
                <th>名称</th>
                <th>状态</th>
                <th>score</th>
                <th>作者</th>
                <th>总结</th>
            </tr>
            </thead>
            <tbody>
            {
                contents.map((item, index) => {
                    let link = articleRoute(item)
                    let score = parseInt(item.meta?.score) || 5
                    const scoreArr = new Array(score);
                    for (let i = 0; i < score; i++) {
                        scoreArr.push(i)
                    }
                    return <tr
                        data-link={link}
                    >
                        <th>{index + 1}</th>
                        <td>
                            <div className="badge badge-primary">{item.meta?.tags[0]}</div>
                        </td>
                        <td data-link={link}
                        >
                            <div
                                className="flex items-center cursor-pointer group">
                                {item.name}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="w-6 h-6 opacity-0 group-hover:opacity-100">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
                                </svg>
                            </div>
                        </td>
                        <td>{item.meta?.status}</td>
                        <td>
                            <div className="rating">
                                {
                                    scoreArr.map(() => {
                                        return <input type="radio" name="rating-2"
                                                      className="mask mask-star-2 bg-orange-400"/>
                                    })
                                }
                            </div>
                        </td>
                        <td>{item.meta?.author}</td>
                        <td>{item.meta?.desc}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
        <div id="detailPage">
        </div>
    </div>
}
