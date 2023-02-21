export const Toc = ({title = '', items = [], id = '', level = 0}) => {
    if (title) {
        return <li className={"mt-2"} >
            <a href={"#" + id} className="t-p-1 t-block">{title}</a>

            <ul style={{paddingLeft: level * 10 + 'px'}}>
                {items?.map(i => <Toc {...i} level={level + 1}></Toc>)}
            </ul>
        </li>
    } else {
        return <ul style={{paddingLeft: level * 10 + 'px'}}> {items?.map(i => <Toc {...i} level={level + 1}></Toc>)}</ul>
    }
}
