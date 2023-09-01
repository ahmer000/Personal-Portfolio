import './Services.css'

function Services({ }) {
  return (
    <section id="services">
      <div className="services-container">
        <div className="service-top">
          <h1 className="section-title">Serv<span>i</span>ces</h1>
          <p className='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas
            magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias
            voluptatum explicabo!</p>
        </div>
        <div className="service-bottom">
          <div className="service-item">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" ></img></div>
              <h2 className="headings">Web Dev</h2>
            <p className='mini-para'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
              architecto placeat beatae tenetur officia quod </p>
          </div>
          <div className="service-item">

              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" ></img></div>
              <h2 className="headings">App Dev</h2>
            
            <p className="mini-para"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
              architecto placeat beatae tenetur officia quod </p>
          </div>
          <div className="service-item">
           
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" ></img></div>
              <h2 className="headings">Blockchain Dev</h2>
            <p className="mini-para">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
              architecto placeat beatae tenetur officia quod </p>
          </div>
          <div className="service-item">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" ></img></div>
              <h2 className="headings">Designing Solutions</h2>
            <p className='mini-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
              architecto placeat beatae tenetur officia quod </p>
          </div>
        </div>
        </div>
  

    </section>

  )
}
export default Services; 