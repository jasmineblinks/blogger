import "./ThirdContent.css"
const ThirdContent = () => {
    return ( 
        <div className="thirdContent">
            <div className="thirdContent_Text">
                <div className="placeholder"></div>
                <div className="paragraph">
                    <h2>Free, open, simple</h2>
                    <span>
                    Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                    </span>
                   
                </div>

                <div className="paragraph">
                    <h2>Powerful tooling</h2>
                    <span>
                    Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites. 
                    </span>
                 
                </div>
            </div>
          
        </div>
     );
}
 
export default ThirdContent;