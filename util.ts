import {Article} from "@bysir/hollow";
import {startTransition} from "react";

export function sortBlog(a: Article, b: Article) {
    if (a.meta?.featured || b.meta?.featured) {
        return (a.meta?.featured ? 1 : 0) > (b.meta?.featured ? 1 : 0)
    }
    return new Date(a.meta.date) > new Date(b.meta.date)
}

export function articleRoute(b?: Article) {
    if (!b) {
        return b.meta.category ? '/' +  b.meta.category : '/blogs'
    }
    return ( b.meta.category ? '/' +  b.meta.category + '/' : '/blogs/') + (b.meta?.slug || b.name)
}

export function dateFormat(date, fmt,) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt;
}


export function sortTag(arr: string[]) {
    const countMap = new Map();
    for (const elem of arr) {
        if (countMap.has(elem)) {
            countMap.set(elem, countMap.get(elem) + 1);
        } else {
            countMap.set(elem, 1);
        }
    }

    const sorted = [...countMap.entries()].sort((a, b) => b[1] - a[1]);

    return sorted
}

