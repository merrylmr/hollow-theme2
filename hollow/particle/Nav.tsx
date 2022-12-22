export default function Nav(props) {
    const menus = [
        {
            href: '/',
            name: '主页',
            icon: 'https://cdn.pixabay.com/animation/2022/12/05/15/23/15-23-06-837_512.gif'
        },
        {
            href: '/tags',
            name: 'Tags',
            icon: 'https://cdn.pixabay.com/photo/2022/02/20/09/43/animal-7024108_960_720.png'
        },
        {
            href: '/gallery',
            name: '相册',
            icon: 'https://cdn.pixabay.com/photo/2021/01/30/12/19/couple-5963678_960_720.png'
        },
        {
            href: '/gallery',
            name: '读书',
            icon: 'https://cdn.pixabay.com/photo/2022/02/20/09/43/animal-7024108_960_720.png'
        },
        {
            href: '/gallery',
            name: '影视',
            icon: 'https://cdn.pixabay.com/photo/2022/02/20/09/43/animal-7024108_960_720.png'
        },
        {
            href: '/about',
            name: '关于',
            icon: 'https://cdn.pixabay.com/photo/2022/03/05/10/08/beauty-7048849_960_720.jpg'
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
