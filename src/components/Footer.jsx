import './Footer.css';
export const Footer=()=>{
    return(
        <section id="footer">
        <div className="footer-container">
          <div className="brand-1">
            <h1> <span>Moha</span>mmad <span>Ah</span><span>mer</span></h1>
          </div>
          <h2 className="solution">A Complete Solution Your Bussiness</h2>
          <div className="social-icon">
            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
            </div>
            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
            </div>
            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/github.png" /></a>
            </div>
            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" /></a>
            </div>
          </div>
          <p>Copyright © 2023. All rights reserved</p>
        </div>
      </section>
    )
};
export default Footer;