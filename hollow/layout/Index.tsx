import Header from "../particle/Header";
import Footer, {Link} from "../particle/Footer";
import Nav from "../particle/Nav"

interface Props {
    icon?: String;
    cover?: String;
    title: string
    page_data?: any
    logo: string
    stack: string,
    time?: string
    footer_links?: Link[]
    children?: any
    activeHeader?: string,
}

import hollow from "@bysir/hollow"
import {defaultConfig} from "../initial_data";

let params = hollow.getConfig()|| defaultConfig;

function FontFamilyStyle({link, family, selector}) {
    if (!family) {
        return null
    }
    switch (family) {
        case 'LXGW WenKai':
            link = link || 'https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css'
            break
        case 'Noto Serif SC':
            link = link || 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;600;900&amp;display=swap'
            break
    }
    return <>
        {link ? <link rel="stylesheet" href={link}/> : null}
        <style dangerouslySetInnerHTML={{
            __html: `${selector} {
            font-family: ${family};
        }`
        }}></style>
    </>
}



export default function Index(props: Props) {
    console.log('props：',props)
    let routerBase = params?.base || ''

    let coverHtml,iconHtml
    if(props.cover) {
        coverHtml=    <img
            className={'object-cover'}
            style={{height: '30vh', width: '100%', 'object-position': `center 66.42%`}}
            src={props.cover} alt=""/>
    }
    if(props.icon){
        iconHtml= <div className={'w-10/12 mx-auto -mt-20'}>
            <img
                className={'w-36'}
                src={props.icon} alt=""/>
            <div className={'text-4xl font-bold'}>
                {props.title}
            </div>
        </div>
    }

    return <html lang="zh">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport"
              content="width=device-width, initial-scale=1.0"/>
        <title>{props.title || 'UnTitled'}</title>
        <link href={routerBase + '/main.css'}
              rel="stylesheet"/>
        <link href={routerBase + '/prism/prism.css'}
              rel="stylesheet"/>
        {
            // params?.fonts?.map((i => {
            //     return <FontFamilyStyle {...i}></FontFamilyStyle>
            // }))
        }
    </head>
    <body className="
    dark:bg-black
    text-black
    dark:text-white
    min-h-screen language-plain flex flex-col">
    <Header name={props.logo} active={props.activeHeader}></Header>


    <div style={{height: '30vh'}}>
        {coverHtml}
    </div>
    {iconHtml}

    <div className='w-10/12 mx-auto mt-16 grid  grid-cols-6 gap-4'>
        <div className='md:col-span-1 col-span-6'>
            <Nav/>
        </div>
        <div className="md:col-span-5 col-span-6">
            {
                props.children
            }

        </div>
    </div>


    <Footer name={props.logo} stack={props.stack} footer_links={props.footer_links}></Footer>
    <div>
        {props.time}
    </div>

    <script src={routerBase + '/prism/prism.js'}></script>
    <script src={routerBase + '/app/index.js'}></script>

    </body>
    </html>
}
