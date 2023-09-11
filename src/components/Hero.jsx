import {Container , Nav, Navbar} from 'react-bootstrap';
import { useState,useEffect } from 'react';
import navicon1 from '../assets/nav-icon1.svg'
import navicon2 from '../assets/nav-icon2.svg'
import navicon3 from '../assets/nav-icon3.svg'
import './Hero.css';
function Hero({}){
  const [activelink,Setactivelink]=useState("home");
  const[scrolled, Setscrolled]=useState(false);

  useEffect(()=>{
    if(window.scrollY > 50){
      Setscrolled(true);
    }else{
      Setscrolled(false);
    }
    window.addEventListener("scroll", onscroll);
    return window.removeEventListener("scroll", onscroll);

 


},[]);
const  onUpdateActiveLink =( value)=>{
  Setactivelink(value);
}
    return(
        <section  >
    <>
      <Navbar className={scrolled ? "scrolled": ""}>
        <Container className="container">
          <Navbar.Brand className='head' >Muhammad Ahmer</Navbar.Brand>
          <Nav >
            <Nav.Link  href="#home" className={activelink ==="home" ? 'active navbar-link' :'navbar-link'} onClick={()=> onUpdateActiveLink('#home')}>Home</Nav.Link>
            <Nav.Link href="#Skills" className={activelink ==="Skills" ? 'active navbar-link' :'navbar-link'} onClick={()=> onUpdateActiveLink('#Skills')}>Skills</Nav.Link>
            <Nav.Link href="#Projects" className={activelink ==="Projects" ? 'active navbar-link' :'navbar-link'} onClick={()=> onUpdateActiveLink('#Projects')}>Projects</Nav.Link>
            <Nav.Link href="#Contact" className={activelink ==="Contact" ? 'active navbar-link' :'navbar-link'} onClick={()=> onUpdateActiveLink('#Contact')}>Contact</Nav.Link>
            <span className='Nav-icons'>
        <div className='Navicons'>
          <a href='#'><img src={navicon1} alt="" /></a>
          <a href='#'><img src={navicon2} alt="" /></a>
          <a href='#'><img src={navicon3} alt="" /></a>
        </div>
      </span>
          </Nav>
        </Container>
      </Navbar>
     
     
    </>
         </section>
    )
};
export default Hero;