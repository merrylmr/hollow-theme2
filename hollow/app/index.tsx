import ReactDOM from 'react-dom';
import Search from "./search";
import Gallery from "./gallery";
import ThemeBtn from "./themeBtn"
import MobileNav from "./MobileNav";
import BookDetail from "./BookDetail";
import React, {useImperativeHandle, useState} from "react";
import Fuse from "fuse.js";

window.addEventListener("load", function () {
    const searchDom = document.getElementById('react-dom-search')
    if (searchDom) {
        const root = ReactDOM.createRoot(searchDom);
        root.render(<Search></Search>);
    }


    const gallery = document.getElementById("gallery-box")
    if (gallery) {
        const root = ReactDOM.createRoot(gallery);
        root.render(<Gallery gallery={JSON.parse(gallery.dataset['json'])}></Gallery>);
    }

    const themeDom = document.getElementById('toggle-theme');
    if (themeDom) {
        console.log('themeDom:', themeDom)
        const root = ReactDOM.createRoot(themeDom);
        root.render(<ThemeBtn></ThemeBtn>)
    }

    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        const root = ReactDOM.createRoot(mobileNav);
        root.render(<MobileNav></MobileNav>)
    }


    const bookDetail = document.getElementById('detailPage');
    const bookList = document.getElementById('bookList');


    if (bookDetail) {
        let url = ''
        console.log('ReactDOM:', ReactDOM.createPortal)
        const BookD = React.forwardRef((props, ref) => {
            const [url, setUrl] = useState()
            useImperativeHandle(ref, () => {
                return {setUrl}
            })
            return <BookDetail url={url}></BookDetail>
        })
        let ref = {
            current: {
                setUrl: (u) => {
                }
            }
        }
        ReactDOM.render(<BookD ref={ref}></BookD>, bookDetail)
        document.body.appendChild(bookDetail)
        const detailFrame = document.getElementById('detailFrame');

        bookList.addEventListener('click', (e) => {
            const url = e.target.getAttribute('data-link');

            ref.current.setUrl(url)
            // detailFrame.src = url;
            bookDetail.classList.toggle('hidden')
        })
    }
})


