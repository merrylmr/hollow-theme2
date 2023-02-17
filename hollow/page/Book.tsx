interface BookItem {
    type: string;
    name: string;
    status: string;
    author: string;
    summary: string;
    score: number
}

const bookList: BookItem[] = [
    {
        type: '计算机',
        name: '黑客与画家',
        author: 'xx',
        status: '已读',
        summary: '',
        score: 5
    },
    {
        type: '计算机',
        name: '黑客与画家',
        author: 'xx',
        status: '已读',
        summary: '',
        score: 5
    },
    {
        type: '计算机',
        name: '黑客与画家',
        author: 'xx',
        status: '已读',
        summary: '',
        score: 5
    }
]
export default function Book() {
    return <div className="container  w-4/5  mx-auto  mt-16 overflow-x-auto min-h-screen">
        <table className="table table-compact w-full">
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
                bookList.map((item, index) => {
                    return <tr>
                        <th>{index + 1}</th>
                        <td>
                            <div className="badge badge-primary">{item.type}</div>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.status}</td>
                        <td>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </td>
                        <td>{item.author}</td>
                        <td>{item.summary}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </div>
}
