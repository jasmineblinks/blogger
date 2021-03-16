import "./SecondContent.css"
import PhonesSvg from '../../images/illustration-phones.svg';

const SecondContent = () => {
    return ( 
        <div className="secondContent">
            <div className="secondContent_Container">
                <img src={PhonesSvg} alt=""/>
                <div className="secondContent_Text">
                    <h1>State of the Art Infrastucture</h1>
                    <span>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</span>
                </div>
            </div>
            
            </div>
     );
}
 
export default SecondContent;