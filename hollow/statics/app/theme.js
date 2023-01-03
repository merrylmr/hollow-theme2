const htmlDom = document.documentElement
let theme = sessionStorage.getItem('theme');
if (!theme) {

    const themeMedia = window.matchMedia("(prefers-color-scheme: light)")
    const sysTheme = themeMedia.matches ? 'light' : 'dark'

    theme = sysTheme
}


// 如果存在
const fn = (mode) => {
    const bgUrl = {
        light: "https://f.cdn-static.cn/12518_16722216044484.html",
        dark: "https://f.cdn-static.cn/12518_16722214476203.html"
    }
    const iframeDom = document.getElementById('iframe-bg');
    if (iframeDom) {
        iframeDom.src = bgUrl[mode]
    }
    htmlDom.setAttribute('data-theme', mode)
}

fn(theme)





