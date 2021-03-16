import "./Footer.css"
import Logo from '../../images/logo.svg';
import FooterColumn from "./FooterColumn";
const Footer = () => {

    const products = ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']

    const company = ['About', 'Team', 'Blog', "Careers"]
    const connect = ['Contact', 'Newsletter', 'LinkedIn']


    return ( 
        <div className="footer">
            <div className="footerContent">
                <div className="footerColumn">
                    <img src={Logo} alt=""/>
                </div>
                <FooterColumn type={'Products'} list={products}/>
                <FooterColumn type={'Company'} list={company}/>
                <FooterColumn type={"Connect"} list={connect}/>
              
            </div>
           

        </div>
     );
}
 
export default Footer;