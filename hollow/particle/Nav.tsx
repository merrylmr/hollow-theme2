export default function Nav(props) {
    const menus = [
        {
            href: '/',
            name: 'Home',
            icon: 'https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7a50e989-884d-41cc-b422-7253dc235fac%2Fthink_(1).png?id=4a422db9-59f8-45df-b028-3e8f0a5b81a9&table=block&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=40&userId=&cache=v2'
        },
        {
            href: '/tags',
            name: 'Tags',
            icon: 'https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F75839ab5-8004-4ee2-a8c9-9a1257206e55%2Fread.png?id=f3d2fc10-4fae-41d2-91ff-a57cf380fdbb&table=block&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=40&userId=&cache=v2'
        },
        {
            href: '/about',
            name: 'About',
            icon: 'https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc6ecd504-828d-4265-a466-08d6cbfcf7bd%2Flove-letter.png?id=f8a28d14-22c6-47a0-9473-2ef4f41cc9f2&table=block&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=40&userId=&cache=v2'
        },
        {
            href: '/links',
            name: 'Links',
            icon: 'https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3fbede26-cfc9-44e7-9786-d090cb0a59c4%2Falien.png?id=6cf888fa-59e2-40a6-9096-02de7e094c24&table=block&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=40&userId=&cache=v2'
        },
        {
            href: '/gallery',
            name: 'Gallery',
            icon: 'https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F62c23621-0eb5-4121-8ed2-e1970c6a397f%2Fvideo.png?id=bf171a36-c9da-48be-85a5-2ec1b9efac9f&table=block&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=40&userId=&cache=v2'
        },
    ]



    return <div>

        <div className="menu-list mt-8">
            {
                menus.map(item => <div className="menu-item mt-2">
                    <a className='flex items-center' href={item.href}>
                        <img src={item.icon} alt=""/>
                        <span>{item.name}</span>
                    </a>
                </div>)
            }
        </div>
    </div>
}
