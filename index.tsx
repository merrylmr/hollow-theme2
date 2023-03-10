import Index from "./layout/Index"
import Index2 from "./layout/Index2"
import Index3 from "./layout/Index3"

import Home from "./page/Home";
import BlogDetail from "./page/BlogDetail";
import TagPage from "./page/TagPage";
import List from "./page/List";
import hollow, {getContents} from "@bysir/hollow"
import MarkDown from "./page/Md";
import {articleRoute} from "./util";
import {defaultConfig, defaultContents, defaultPageConfig, defaultMenus} from "./initial_data";
import Gallery from "./page/Gallery";
import Book from "./page/Book";
import BookDetail from "./page/BookDetail";
import {Component, ReactNode} from "react";

let contents = getContents('contents/blog').list;
if (contents.length == 0) {
    contents = defaultContents
}

let books = getContents('contents/book').list;
if (books.length == 0) {
    books = defaultContents
}

let params = hollow.getConfig() || defaultConfig;

let global = {
    title: params?.title,
    logo: params?.logo,
    stack: params?.stack,
    footer_links: params?.footer_links,
}

const pageConfig = params.pageConfig || defaultPageConfig

let tags = []
contents.forEach(i => {
    tags = tags.concat(i.meta?.tags)
})

// @ts-ignore
tags = Array.from(new Set(tags));

// noinspection TypeScriptValidateTypes
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
        // 所有文章
        ...contents.map(b => {
            return {
                path: articleRoute(b),
                component: () => {
                    let content = b.getContent()
                    // 不能这样写，因为在 golang 中没有对应的 content 字段，不能赋值成功
                    // b.content = content
                    return <Index2 {...global}
                                   title={b.name}
                                   activeHeader="Blog">
                        <BlogDetail {...b} content={content}></BlogDetail>
                    </Index2>
                }
            }
        }),
        ...books.map(b => {
            return {
                path: articleRoute(b),
                component: () => {
                    let content = b.getContent()
                    return <Index3 {...global}
                                   {...pageConfig.tag}

                                   activeHeader="Tags">
                        <BookDetail{...b} content={content}></BookDetail>
                    </Index3>
                }
            }
        }),
        {
            path: 'tags',
            component: () => {
                return <Index2 {...global}
                               {...pageConfig.tag}
                               activeHeader="Tags">
                    <TagPage></TagPage>
                </Index2>
            }
        },
        ...tags.map(tag => ({
            path: 'tags/' + tag,
            component: () => {
                return <Index2 {...global}
                               {...pageConfig.tag}
                               activeHeader="Tags">
                    <TagPage selectedTag={tag}></TagPage>
                </Index2>
            }
        })),
        {
            path: 'links',
            component: () => {
                return <Index2 {...global}
                               {...pageConfig.link}
                               activeHeader="Links">
                    <MarkDown filepath={params.links_page}></MarkDown>
                </Index2>
            }
        },
        {
            path: 'about',
            component: () => {
                return <Index2 {...global}
                              {...pageConfig.about}
                              activeHeader="About">
                    <MarkDown filepath={params.about_page}></MarkDown>
                </Index2>
            }
        },
        {
          path:'gallery',
            component: () => {
                return <Index2 {...global}
                              {...pageConfig.gallery}
                              title="照片与故事"
                              activeHeader="Gallery">
                    <Gallery></Gallery>
                </Index2>
            }
        },
        {
            path:'book',
            component: () => {
                return <Index2 {...global}
                              {...pageConfig.book}
                              activeHeader="book">
                    <Book></Book>
                </Index2>
            }
        },
        {
            path:'video',
            component: () => {
                return <Index2 {...global}
                              {...pageConfig.video}
                              activeHeader="video">
                    <Gallery></Gallery>
                </Index2>
            }
        },

        {
            path: 'blog',
            component: () => {
                return <Index2
                    {...global}
                    className="bg-subtle-background"
                    title={'Merry的博客'}>
                    <List

                        tree={true}
                        path={'contents/blog/'}
                    />
                </Index2>
            },
        },
        ...defaultMenus[0].children.map(page => ({
            path: page.href,
            component: () => {
                return <Index2 {...global}
                >
                    <List
                        title={page.name}
                        path={page.path}
                    ></List>
                </Index2>
            }
        })),
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
