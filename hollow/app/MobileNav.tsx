import {useState} from "react";



export default function MobileNav() {
    const [showNavPanel, setShowNavPanel] = useState(false)

    function toggleNav() {
        const flag = !showNavPanel
        console.log('flag:', flag)
        setShowNavPanel(flag)
    }


    let navPanel
    if (showNavPanel) {
        navPanel = <>
            <div className="w-full h-screen bg-gray-50  fixed top-0 left-0"
            ></div>
            <div className="w-4/5 h-screen fixed top-0 left-0"
                 onClick={() => toggleNav()}>
                nav
            </div>
        </>
    }
    return <>
        <div className="navbar z-10 flex sm:hidden">
            <div className="flex-1">
                <a href={'/'} className="btn btn-ghost normal-case text-xl text-primary">Merry</a>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost"
                        onClick={() => toggleNav()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="inline-block w-6 h-6 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        {/*    面板部分 */}
        {navPanel}


    </>

}
