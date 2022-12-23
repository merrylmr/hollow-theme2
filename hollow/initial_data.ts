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
                tags: ["demo", "hello"],
                date: '2022-01-01'
            },
            content: "",
            ext: "",
            is_dir: false,
        },
        {
            name: "elementUI及vuetifyjs动态换色实践",
            getContent: () => {
                return "<p>这篇文章在你新增任意文章后就会消失。</p>"
            },
            meta: {
                tags: ["demo", "hello"],
                date: '2022-01-01'
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


export const defaultNews: {
    cover?: string,
    url: string,
    title: string
}[] = [
    {
        cover: '',
        url: 'https://www.ruanyifeng.com/blog/2022/12/weekly-issue-235.html',
        title: '  科技爱好者周刊（第 235 期）：青年失业率与选择创业'
    },
    {
        cover: '',
        url: 'https://www.ruanyifeng.com/blog/2022/12/weekly-issue-236.html',
        title: ' 科技爱好者周刊（第 236 期）：中国的阳光地带'
    },
]


