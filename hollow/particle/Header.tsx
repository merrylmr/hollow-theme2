import Link from "../component/Link";
import SearchBtn from "../component/SearchBtn";
import {defaultMenus} from "../initial_data";

export function NavComp(props) {
    const menu = defaultMenus
    return <>
        <div
            className={`max-w-screen-lg w-4/5  mx-auto   items-center justify-between  h-16 header ${props.className || ''} hidden sm:flex`}>
            <div className={'flex items-center'}>
                <Link
                    href="/"
                    className='flex items-center text-primary text-xl font-bold mr-8 font-Poppins tracking-wide'>
                    Merry
                </Link>
                <div className={'flex items-center'}>
                    {
                        menu.map(item => {
                            if (item.children) {
                                return <div className="dropdown p-2">
                               <span tabIndex={0} className="flex items-center">
                                   <Link rel="stylesheet" href={item.href}> {item.name}</Link>
                                   <svg
                                       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                       strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 cursor-pointer">
                                     <path strokeLinecap="round" strokeLinejoin="round"
                                           d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                    </svg>
                               </span>
                                    <ul tabIndex={0}
                                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        {
                                            item.children.map(one =>
                                                <li><Link href={one.href}>{one.name}</Link></li>)
                                        }
                                    </ul>
                                </div>
                            } else {
                                return <Link href={item.href} className={'p-4'}>{item.name}</Link>
                            }
                        }
                    )
                }

            </div>
        </div>

        <div className='flex items-center'>
            <div
                id="toggle-theme"
                className="cursor-pointer">

            </div>

            <div id="react-dom-search" className={'ml-4 flex'}>
                <SearchBtn
                ></SearchBtn>
            </div>
        </div>
        </div>
        <div id="mobile-nav" className="z-20 relative">
            <div className="navbar  flex sm:hidden">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl text-primary font-Poppins">Merry</a>
                </div>
                <div className="flex-none">
                    <label className="btn btn-square btn-ghost swap swap-rotate">
                        <input type="checkbox"/>
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
            </div>
        </div>
    </>
}




export default function Header(props: { name: string, active: string }) {
    const mode = 'light'

    const menus = [
        {href: '/', name: 'Home'},
        {href: '/tags', name: 'Tags'},
        {href: '/about', name: 'About'},
        {href: '/links', name: 'Links'},
        {href: '/gallery', name: 'Gallery'},
    ].map(i => ({
            ...i,
            active: i.name === props.active
        }
    ))


    // @ts-ignore
    return <div className={'home-header'}>
        <div className={'h-12 hidden sm:block'}></div>
        <NavComp></NavComp>
        <div className='wave'>
            <svg preserveAspectRatio="none" width="1440" height="74" viewBox="0 0 1440 74">
                <path
                    className="fill-current"
                    d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
            </svg>
        </div>
        <div className='person-3d pointer-events-none hidden sm:block'>
            <img
                src="https://f.cdn-static.cn/12518_16766126107382.png" alt=""/>
        </div>


    </div>
}
