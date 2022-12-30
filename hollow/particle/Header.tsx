import Link from "../component/Link";
import SearchBtn from "../component/SearchBtn";
import {defaultMenus} from "../initial_data";
import Bg3d from "../component/Bg3d.tsx"

export function NavComp(props) {
    const menu = defaultMenus
    return <div
        className={`max-w-screen-lg w-4/5  mx-auto  flex items-center justify-between  h-16 header ${props.className}`}>
        <div className={'flex items-center'}>
            <Link
                href="/"
                className='flex items-center text-primary text-xl font-bold mr-8'>
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
        <div className={'h-12'}></div>
        <NavComp></NavComp>
        <div className='wave'>
            <svg preserveAspectRatio="none" width="1440" height="74" viewBox="0 0 1440 74">
                <path
                    className="fill-current"
                    d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
            </svg>
        </div>
        <div className='person-3d pointer-events-none'>
            <img
                src="https://f.cdn-static.cn/12518_16720368769193.png" alt=""/>
        </div>
        <div className="absolute frame-bg bottom-0 w-full">
            <Bg3d></Bg3d>
        </div>

    </div>
}
