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
                    return <tr>
                        <th>{index + 1}</th>
                        <td>
                            <div className="badge badge-primary">{item.meta?.tags[0]}</div>
                        </td>
                        <td data-link={link}> {item.name}</td>
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