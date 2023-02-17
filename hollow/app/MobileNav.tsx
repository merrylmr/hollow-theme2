import {useRef, useState} from "react";
import {defaultMenus} from "../initial_data";
import ThemeBtn from "./themeBtn";


export default function MobileNav() {
    const [showNavPanel, setShowNavPanel] = useState(false)
    const inputRef = useRef<HTMLInputElement>()
    const bodyDom = document.body;

    function MenuList(menu, fontSize = 28) {
        return <ul className="pl-4">
            {
                menu.map((item, index) => {
                    if (item.children) {
                        return <>
                            <li className={`p-2 transition-transform  delay-${index * 100} duration-150   ${showNavPanel ? 'translate-x-0' : '-translate-x-full'}`}
                            >
                                <a
                                    className={`block`}
                                    style={{"font-size": `${fontSize}px`}}
                                    href={item.href}>{item.name}</a>
                                {MenuList(item.children, 22)}
                            </li>
                        </>
                    } else {
                        return <li
                            className={`p-2 transition-transform  delay-${index * 100}  duration-150  ${showNavPanel ? 'translate-x-0' : '-translate-x-full'}`}>
                            <a className={`block`}
                               style={{"font-size": `${fontSize}px`}}
                               href={item.href}>
                                {item.name}
                            </a>
                        </li>
                    }
                })
            }
        </ul>
    }

    function toggleNav(dom, e) {
        const flag = !showNavPanel
        setShowNavPanel(flag)
        bodyDom.classList.toggle('h-full')
        bodyDom.classList.toggle('overflow-hidden')

        if (dom) {
            const check = inputRef.current.checked;
            inputRef.current.checked = !check;
        }

    }


    let navPanel

    const menu = defaultMenus
    navPanel = <div
        className={'w-full h-screen bg-blur  fixed top-0 left-0 transition-transform duration-200 ' + (showNavPanel ? 'translate-x-0' : '-translate-x-full')}
        style={{'backdrop-filter': 'blur(8px)'}}
        onClick={(e) => toggleNav(true, e)}>
        <div className="w-4/5  fixed bottom-[100px] left-0">
            {MenuList(menu, 28)}

            <div className="ml-6 mt-6">
                <ThemeBtn></ThemeBtn>
            </div>
        </div>
    </div>

    return <>
        <div className="navbar z-10   flex sm:hidden">
            <div className="flex-1">
                <a href={'/'} className="btn btn-ghost normal-case text-xl text-primary font-Poppins">Merry</a>
            </div>
            <label className="btn btn-square btn-ghost swap swap-rotate sticky top-0 z-30">
                <input type="checkbox"
                       ref={inputRef}
                       onChange={() => toggleNav()}/>
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                     viewBox="0 0 512 512">
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
                </svg>

                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                     viewBox="0 0 512 512">
                    <polygon
                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
                </svg>

            </label>
        </div>
        {/*    面板部分 */}
        {navPanel}
    </>

}
