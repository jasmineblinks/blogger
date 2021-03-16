import "./FooterColumn.css"
const FooterColumn = ({type, list}) => {

    const createList = list.map(item=>{
        return (<li key={item}>{item}</li>)
    })

    return ( 
        <div className="footerColumn">
                <p className="footerBolder">{type}</p>
                <ul>
                    {createList}
                </ul>
        </div>
     );
}
 
export default FooterColumn;