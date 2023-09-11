import './Contact.css';

export const Contact=()=>{
return(
<section className='contact' id="Contact">
    <div className="contact-container">
      <div>
        <h1 className="section-title">Contact <span>info</span></h1>
      </div>
      <div className="contact-items">
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
          <div className="contact-info">
            <h1>Phone</h1>
            <h2>+92 309 4000 994</h2>
            <h2>+92 308 2429 235</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
          <div className="contact-info">
            <h1>Email</h1>
            <h2>thisisahmer000@gmail.com</h2>
            <h2>ahmer400994gmail.com</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
          <div className="contact-info">
            <h1>Address</h1>
            <h2>Karachi Airport, Karachi,Pakistan</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
  };
 export default Contact;