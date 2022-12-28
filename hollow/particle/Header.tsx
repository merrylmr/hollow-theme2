import Link from "../component/Link";
import SearchBtn from "../component/SearchBtn";
import {defaultMenus} from "../initial_data";


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
            <label className="swap swap-rotate text-base">
                <input type="checkbox"/>
                <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24">
                    <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                </svg>
                <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24">
                    <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                </svg>
            </label>
            <div id="react-dom-search" className={'ml-4 flex'}>
                <SearchBtn
                ></SearchBtn>
            </div>
        </div>
    </div>
}

export default function Header(props: { name: string, active: string }) {
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
                    fill="#fff"
                    d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
            </svg>
        </div>
        <div className='person-3d'>
            <img
                 src="https://f.cdn-static.cn/12518_16720368769193.png" alt=""/>
        </div>

    </div>
}
