import Index from "./layout/Index"

import Home from "./page/Home";
import BlogDetail from "./page/BlogDetail";
import TagPage from "./page/TagPage";

import hollow, {getContents} from "@bysir/hollow"
import MarkDown from "./page/Md";
import {articleRoute} from "./util";
import {defaultConfig, defaultContents} from "./initial_data";
import Gallery from "./page/Gallery";

let contents = getContents('contents').list;
if (contents.length == 0) {
    contents = defaultContents
}
let params = hollow.getConfig() || defaultConfig;

let global = {
    title: params?.title,
    logo: params?.logo,
    stack: params?.stack,
    footer_links: params?.footer_links,
}

const pageConfig={
    home:{
        cover: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/932dc18a-537a-443a-8e78-71b9218c33c0/kFuIOzX.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221221T055528Z&X-Amz-Expires=86400&X-Amz-Signature=7fabc51bf88a8ec2794ce837c2fca73c3c38e2ac461c38ea226bd77e2062e8ff&X-Amz-SignedHeaders=host&x-id=GetObject',
        title: 'Merry日常分享',
        icon: 'https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F04f9e46d-1bb0-4165-814a-03fbb42cdea6%2Fbear_(7).png?table=block&id=faeaabbf-0139-4a33-bfa5-638a9a37f74a&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=250&userId=&cache=v2'
    },
    link:{
        cover: 'https://cdn.pixabay.com/photo/2022/10/28/11/14/leaves-7552915_960_720.png',
        title: '友情链接',
        icon: 'https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F04f9e46d-1bb0-4165-814a-03fbb42cdea6%2Fbear_(7).png?table=block&id=faeaabbf-0139-4a33-bfa5-638a9a37f74a&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=250&userId=&cache=v2'
    },
    tag:{
        cover: 'https://cdn.pixabay.com/photo/2022/06/14/15/26/background-7262229_960_720.jpg',
        title: 'tag',
        icon: 'https://wangyurui.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F04f9e46d-1bb0-4165-814a-03fbb42cdea6%2Fbear_(7).png?table=block&id=faeaabbf-0139-4a33-bfa5-638a9a37f74a&spaceId=eb38b2f9-5e9b-416a-8c56-fec2190548d3&width=250&userId=&cache=v2'
    },
    about:{
        cover: 'https://cdn.pixabay.com/photo/2022/09/05/14/37/fruits-7434339_960_720.jpg',
        title: '关于我',
        icon: 'https://cdn.pixabay.com/photo/2022/11/08/14/42/monstera-7578722_960_720.png'
    },
    gallery:{
        cover: 'https://cdn.pixabay.com/photo/2022/06/14/15/26/background-7262228_960_720.jpg',
        // cover: 'https://cdn.pixabay.com/photo/2022/06/14/15/26/background-7262228_960_720.jpg',
        title: '照片与故事',
        icon: 'https://cdn.pixabay.com/photo/2022/02/20/09/43/animal-7024108_960_720.png'
    },
}

let tags = []
contents.forEach(i => {
    tags = tags.concat(i.meta?.tags)
})

// @ts-ignore
tags = Array.from(new Set(tags));

export default {
    pages: [
        {
            path: '',
            component: () => {
                return <Index {...global}
                              {...pageConfig.home}
                              title="Merry日常分享"
                              activeHeader="Home">
                    <Home/>
                </Index>
            },
        },
        ...contents.map(b => {
            return {
                path: articleRoute(b),
                component: () => {
                    let content = b.getContent()
                    // 不能这样写，因为在 golang 中没有对应的 content 字段，不能赋值成功
                    // b.content = content
                    return <Index {...global} activeHeader="Blog">
                        <BlogDetail {...b} content={content}></BlogDetail>
                    </Index>
                }
            }
        }),
        {
            path: 'tags',
            component: () => {
                return <Index {...global}
                              {...pageConfig.tag}
                              title="tag"
                              activeHeader="Tags">
                    <TagPage></TagPage>
                </Index>
            }
        },
        ...tags.map(tag => ({
            path: 'tags/' + tag,
            component: () => {
                return <Index {...global}
                              {...pageConfig.tag}
                              activeHeader="Tags">
                    <TagPage selectedTag={tag}></TagPage>
                </Index>
            }
        })),
        {
            path: 'links',
            component: () => {
                return <Index {...global}
                              {...pageConfig.link}
                              title="友情链接"
                              activeHeader="Links">
                    <MarkDown filepath={params.links_page}></MarkDown>
                </Index>
            }
        },
        {
            path: 'about',
            component: () => {
                return <Index {...global}
                              {...pageConfig.about}
                              title="关于我"
                              activeHeader="About">
                    <MarkDown filepath={params.about_page}></MarkDown>
                </Index>
            }
        },
        {
          path:'gallery',
            component: () => {
                return <Index {...global}
                              {...pageConfig.gallery}
                              title="照片与故事"
                              activeHeader="Gallery">
                    <Gallery></Gallery>
                </Index>
            }
        },
        {
            path: 'article.json',
            body: JSON.stringify(contents.map(i => ({
                ...i,
                content: i.getContent({pure: true})
            })))
        }
    ],

    // 将 public 文件下所有内容 copy 到 dist 下
    assets: ['statics'],

    // 用于得到预览某一个篇文章的地址
    articleRouter: articleRoute
}
