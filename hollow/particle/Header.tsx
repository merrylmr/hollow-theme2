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
            <div className={'flex items-center'}>
                <img
                    src="https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F04f9e46d-1bb0-4165-814a-03fbb42cdea6%2Fbear_(7).png?table=block&id=faeaabbf-0139-4a33-bfa5-638a9a37f74a&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=40&userId=&cache=v2"
                    alt=""/>
                Merry
            </div>
            <div className={'flex items-center'}>
                <Search></Search>
                search
            </div>
        </section>

    </div>
}
