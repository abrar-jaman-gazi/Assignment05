import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import logo from "../assets/logo-text.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
         
          <a href="#" className="logo">
                  <img src={logo} alt="Dev Stack Logo" />
                  
                  </a>
          
          <p>Curated tools, technologies, and resources for developers building
modern software.</p>
          <div className="social-links">
            <a href="#" aria-label="GitHub"><FiGithub /></a>
            <a href="#" aria-label="Twitter"><FiTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>Product</h3>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#">Features</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#">Careers</a>
          </div>
          <div>
            <h3>Legal</h3>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">License</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div><a href="#">Privacy</a><a href="#">Terms</a></div>
      </div>
    </footer>
  );
}

export default Footer;