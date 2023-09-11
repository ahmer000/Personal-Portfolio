import meter1 from "../assets/meter1.svg"
import meter2 from "../assets/meter2.svg"
import "./Skills.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/color-sharp.png"

export const Skills = () => {
  const responsive = {
    
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3
      
     },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
     
    },
    mobile: {
      breakpoint: { max: 464, min: 0  },
   
      items: 1
    }
  };

  return (
    <section className="skill" id="Skills">
      
            
      <div className="skill-bx">
                        <h2 className="heading">Skills</h2>
                        <p className="para">I am passionate Front-end-Developer with Strong base of Web Development and Web Design.<br></br> WebSite Designs, Web-Applications,Mobile-Application.</p>
                        
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                           
                            <div className="item" >
                                <img src={meter1} alt="Image"  />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item" >
                                <img src={meter2} alt="Image" />
                                <h5>UI/UX Design</h5>
                            </div>
                            <div className="item" >
                                <img src={meter1} alt="Image" className="Image" />
                                <h5>Web Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5> Web/App</h5>
                            </div>
                          
                        </Carousel>
                        </div>
       
        
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
export default Skills;