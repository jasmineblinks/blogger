import {ReactComponent as ArrowDown} from '../../images/icon-arrow-light.svg';
import "./HeaderItem.css"
import {useEffect, useRef, useState} from 'react';
const HeaderItem = ({content, list}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const itemRef = useRef(null)

    const handleClose = (e) =>{
        if(!itemRef.current.contains(e.target)){
            setIsMenuOpen(false)
        }
    }

    const createList = list.map(item=>{
        return (<li key={item}>{item}</li>)
    })

    useEffect(()=>{
        if(isMenuOpen){

                document.addEventListener('click', handleClose)

                return ()=>{
                document.removeEventListener('click', handleClose)
                } 

        }
    },[isMenuOpen])

    return ( 
        <div 
        className="headerItem"
        ref={itemRef}
        onClick={()=>setIsMenuOpen(prev=>!prev)}>
            {content} <ArrowDown/> 
            {isMenuOpen && 
            <div className="menu">
                <ul>
                   {createList}
                </ul>
            </div>
            }
        
        </div> 
     );
}
 
export default HeaderItem;