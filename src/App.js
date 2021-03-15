import logos from "./logos.svg";
import illustrationEdit from "./illustrationEdit.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img src={logos} className="App-arrow" alt="logo" />
          <ul className="header-list">
            <li>Product</li>
            <li>Company</li>
            <li>Connect</li>
          </ul>
          <div>
            <button>Login</button>
            <button>Sign up</button>
          </div>
        </div>
        <article className="heading-text">
          <div>
            <h2>A Modern Publishing Platform</h2>
            <p>Grow your audience and build your online brand</p>
          </div>
          <div>
            <button>start for free</button>
            <button>learn more</button>
          </div>
        </article>
      </header>
      <div className="first-session">
        <h2>Designed for the future</h2>
        <div className="first-header">
          <div>
            <h4>Introducing an extensible editor </h4>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h4>Robust content management</h4>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
          <div>
            <img src={illustrationEdit} className="App-logo" alt="logo" />
          </div>
        </div>
        <div>
          <div>{/* <img src={logo} className="App-logo" alt="logo" /> */}</div>
          <div>
            <h4> State of the Art Infrastructure</h4>
            <p>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
          <div>
            <div></div>
            <div>
              <h5>Free, open, simple</h5>
              <p>
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
              <h5>Powerful tooling</h5>
              <p>
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </p>
            </div>
            <footer>
              <div>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
              </div>
              <div>
                <ul>
                  <li>Product</li>
                  <li>Overview</li>
                  <li> Pricing</li>
                  <li>Marketplace</li>
                  <li>Features</li>
                  <li>Integrations</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li> Company</li>
                  <li>About</li>
                  <li>Team</li>
                  <li>Blog</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li> Connect</li>
                  <li> Contact</li>
                  <li> Newsletter</li>
                  <li> LinkedIn</li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
