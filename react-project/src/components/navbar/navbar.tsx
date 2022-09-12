import './navbar.scss';

import { ReactComponent as LogoSVG } from '../../images/logo.svg';
import { ReactComponent as DarkModeSVG } from '../../images/dark-mode.svg';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="icon logo">
        <LogoSVG />
      </div>
      <div className="tabs">
        <div className="tab home">
          <a href="#">Home</a>
        </div>
        <div className="tab contact-me">
          <a href="#">Contact Me</a>
        </div>
        <div className="tab about-me">
          <a href="#">About Me</a>
        </div>
      </div>
      <div className="icon theme-switcher">
        <DarkModeSVG />
      </div>
    </div>
  );
}

export default Navbar;
