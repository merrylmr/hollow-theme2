export default function Nav(props) {
    const menus = [
        {
            href: '/',
            name: '主页',
            icon: 'https://cdn.pixabay.com/animation/2022/12/05/15/23/15-23-06-837_512.gif'
        },
        {
            href: '/tags',
            name: '分类',
            icon: 'https://cdn.pixabay.com/photo/2022/02/20/09/43/animal-7024108_960_720.png'
        },
        {
            href: '/gallery',
            name: '相册',
            icon: 'https://cdn.pixabay.com/photo/2021/01/30/12/19/couple-5963678_960_720.png'
        },
        {
            href: '/book',
            name: '读书',
            icon: 'https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff3d8241d-3f6b-4d21-b213-3da9026d2ef2%2Fthe-end.png?table=block&id=f8f0a3c5-4553-4084-997a-182d93b67ef7&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=250&userId=&cache=v2'
        },
        {
            href: '/video',
            name: '影视',
            icon: 'https://cdn.pixabay.com/photo/2012/04/12/13/16/clapperboard-29986_960_720.png'
        },
        {
            href: '/about',
            name: '关于',
            icon: 'https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_960_720.png'
        },
    ]



    return <div>

        <div className="menu-list">
            {
                menus.map(item => <div className="menu-item mt-2">
                    <a className='flex items-center' href={item.href}>
                        <img className="w-6" src={item.icon} alt=""/>
                        <span className="ml-2 border-b border-gray-200">{item.name}</span>
                    </a>
                </div>)
            }
        </div>
    </div>
}
