import React, {useEffect, useState} from "react";

export default function BookDetail() {
    const [url, setUrl] = useState()
    const [show, setShow] = useState(false)

    // TODO:可以优化
    useEffect(() => {
        const bookList = document.getElementById('bookList');
        bookList.addEventListener('click', (e) => {
            const url = e.target.closest("tr").getAttribute('data-link');
            if (url) {
                setUrl(url)
                setShow(true)
            }
        })
    }, [])
    return <div className={`book-detail
                    w-full
                    h-screen
                    fixed left-0 top-0
                    z-30 bg-black
                     bg-opacity-25
                     ${show ? '' : 'hidden'}
                     `}
                onClick={() => setShow(false)}>
        <div className="inner w-1/2 h-screen fixed right-0 top-0 bg-white

">
            <iframe
                frameBorder="0"
                className="w-full h-full"
                src={url}>
            </iframe>
        </div>
    </div>
}
