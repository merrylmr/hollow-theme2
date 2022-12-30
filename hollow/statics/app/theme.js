const htmlDom = document.documentElement
const theme = sessionStorage.getItem('theme');
if (!theme) {
    sessionStorage.setItem('theme', 'light')
}

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





