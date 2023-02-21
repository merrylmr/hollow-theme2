export default function BookDetail(props) {
    return <div className="book-detail w-full h-screen absolute left-0 top-0 bg-gray-50">
        <div className="inner w-1/2 h-screen absolute right-0 top-0 bg-base-100/5">
            <iframe id="detailFrame" frameBorder="0" className="w-full h-full"></iframe>
        </div>
    </div>
}
