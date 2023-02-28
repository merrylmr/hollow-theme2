import {NavComp} from "../particle/Header";
import Footer, {Link} from "../particle/Footer";


interface Props {
    className?: string;
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

let params = hollow.getConfig() || defaultConfig;




export default function Index(props: Props) {
    let routerBase = params?.base || ''


    return <html lang="zh" data-theme="light">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport"
              content="width=device-width, initial-scale=1.0"/>
        <title>{props.title || 'UnTitled'}</title>
        <link href={routerBase + '/main.css'}
              rel="stylesheet"/>
        <link href={routerBase + '/prism/prism.css'}
              rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC&family=Poppins&display=swap"
              rel="stylesheet"/>

        <style dangerouslySetInnerHTML={{
            __html: `.font-Poppins {
          font-family: 'Poppins', sans-serif;
        }
         body {
           font-family: 'Noto Serif SC', serif;
        }
        `
        }}></style>
        <script src={routerBase + '/app/theme.js'}></script>
    </head>
    <body className="
    text-base-content
  bg-subtle-background
    min-h-screen language-plain">
    {
        props.children
    }
    <script src={routerBase + '/prism/prism.js'}></script>
    <script src={routerBase + '/app/index.js'}></script>

    </body>
    </html>
}
