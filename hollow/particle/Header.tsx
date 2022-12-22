import Link from "../component/Link";
import Search from "../app/search";

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
    return <div>
        <section className="flex items-center justify-between px-8 h-12">
            <a href="/" className='flex items-center'>
                <img
                    className="w-8"
                    src="https://cdn.pixabay.com/photo/2022/02/20/09/43/animal-7024108_960_720.png"
                    alt=""/>
                Merry
            </a>
            <div className='flex items-center'>
                <Search></Search>
                search
            </div>
        </section>

    </div>
}
