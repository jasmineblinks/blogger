import { useState, useEffect, useRef } from 'react';
import {ReactComponent as ArrowDown} from '../../images/icon-arrow-dark.svg';
import "./HeaderItemMobile.css"
const HeaderItemMobile = ({content, list}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleToggleMenu = () =>{
        setIsMenuOpen(prev=>!prev)
    }
    const itemRef = useRef(null)


    
    const handleClose = (e) =>{
        if(!itemRef.current?.contains(e.target)){
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



    const arrowRotateStyle ={
        transform: 'rotate(180deg)',
    }

    return ( 
        <div ref={itemRef} onClick={handleToggleMenu} className="headerItem_Mobile">
            <div className="headerItemContent_Mobile">
                {content}  
                <ArrowDown className="arrowDown_Mobile"
                style={isMenuOpen ? arrowRotateStyle : {}}
                />
            </div>
            
            {isMenuOpen && 
                <div className="menu_Mobile">
                    <ul>
                      {createList}
                    </ul>
                </div>
            }
        </div>
     );
}
 
export default HeaderItemMobile;