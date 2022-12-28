import {Content} from "@bysir/hollow";
import {GalleryItem} from "./page/Gallery";

export const defaultConfig = {
    logo: "Hollow Theme",
    stack: "Hollow"
}

export const defaultContents: Content[] =
    [
        {
            name: "前端错误收集（Vue）",
            getContent: () => {
                return "<p>这篇文章在你新增任意文章后就会消失。</p>"
            },
            meta: {
                tags: ["demo", "hello","vue","threejs","css","react","javascript","ts"],
                date: '2022-01-01',
                desc:'对开发者：为了更快速的定位及解决bug，减少 JS Error 的错误量；\n' +
                    '对用户体验：让用户更加流畅的使用我们的产品，减少用户反馈时间，让尽量少的用户遇到这样的场景就把问题修改掉，保证尽量多的用户可以正常使用；\n' +
                    '对产品：不断发现产品的问题，提升产品质量。'
            },
            content: "",
            ext: "",
            is_dir: false,
        }
    ]

let pics = [
    {
        url: "https://images.pexels.com/photos/14208380/pexels-photo-14208380.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        text: "Dior"
    },
    {
        url: "https://images.pexels.com/photos/5732095/pexels-photo-5732095.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        text: "生日快乐"
    },

    {
        url: "https://images.pexels.com/photos/13458913/pexels-photo-13458913.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        text: "Cat"
    },

    {
        url: "https://images.pexels.com/photos/14100684/pexels-photo-14100684.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        text: "Tree"
    },

    {
        url: "https://images.pexels.com/photos/13960602/pexels-photo-13960602.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        text: "Car auto-rows-auto auto-cols-auto photos photos photos photos photos photosgrid-flow-rowauto-rows-auto auto-cols-auto grid-flow-rowauto-rows-auto auto-cols-auto grid-flow-row"
    },
    {
        url: "https://images.pexels.com/photos/13915489/pexels-photo-13915489.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        text: ""
    },
];

export const defaultGallery: { title: string, items: GalleryItem[] } = {
    title: "照片与故事",
    items: pics
}


export const defaultPageConfig = {
    home: {
        cover: 'https://f.cdn-static.cn/12518_16716899425782.png',
        title: 'Merry日常分享',
        icon: 'https://cdn.pixabay.com/animation/2022/12/05/15/23/15-23-06-837_512.gif'
    },
    link: {
        cover: 'https://cdn.pixabay.com/photo/2022/10/28/11/14/leaves-7552915_960_720.png',
        title: '友情链接',
        icon: 'https://cdn.pixabay.com/photo/2022/02/20/09/43/animal-7024108_960_720.png'
    },
    tag: {
        cover: '',
        title: '分类',
        icon: 'https://cdn.pixabay.com/photo/2022/02/20/09/43/animal-7024108_960_720.png'
    },
    about: {
        cover: '',
        title: '关于我',
        icon: 'https://cdn.pixabay.com/photo/2021/11/12/03/04/woman-6787784_960_720.png'
    },
    gallery: {
        cover: 'https://cdn.pixabay.com/photo/2022/01/25/12/16/laptop-6966045_960_720.jpg',
        title: '照片与故事',
        icon: 'https://cdn.pixabay.com/photo/2022/02/20/09/43/animal-7024108_960_720.png'
    },
    book: {
        cover: 'https://cdn.pixabay.com/photo/2016/08/24/16/20/books-1617327_960_720.jpg',
        title: '书籍',
        icon: 'https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff3d8241d-3f6b-4d21-b213-3da9026d2ef2%2Fthe-end.png?table=block&id=f8f0a3c5-4553-4084-997a-182d93b67ef7&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=250&userId=&cache=v2'
    },
    video: {
        cover: 'https://5b0988e595225.cdn.sohucs.com/images/20170907/b1374a65d7244db1a7eb96b3183decd5.jpeg',
        title: '影视',
        icon: 'https://cdn.pixabay.com/photo/2012/04/12/13/16/clapperboard-29986_960_720.png'
    },
}


export const defaultProjectList: {
    cover: string,
    title: string,
    desc: string,
    url: string
}[] = [
    {
        cover: 'https://daisyui.com/images/components/kbd.jpg',
        title: '3d全景工具',
        desc: 'threejs、web3d',
        url: 'http://admin-vuetify.bysir.top:1080/#/editor-3d/view'
    },
    {
        cover: 'https://daisyui.com/images/components/card.jpg',
        title: '电子请帖',
        desc: 'vue、movable',
        url: 'https://inv.lmrone.top/'
    }
]

interface MenuItem {
    name: string;
    href: string;
    path?: string;
    children?: MenuItem[]
}

export const defaultMenus: MenuItem[] = [
    {
        name: 'Posts',
        href: '/blog/',
        children: [
            {
                name: 'Css',
                href: '/blog/css/',
                path:'contents/css'
            },
            {
                name: 'Animation',
                href: '/blog/animation/',
                path:'contents/animate'
            },
            {
                name: 'Vue',
                href: '/blog/vue/',
                path:'contents/vue'
            },
            {
                name: 'Webpack',
                href: '/blog/webpack/',
                path:'contents/webpack'
            },
        ],
    },
    {
        name: '读书',
        href: '/book'
    },
    {
        name: '影视',
        href: '/video/'
    },
    {
        name: '关于',
        href: '/about/'
    },
]

