import { useEffect,useState } from "react";
import {Container,Row,Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/header-img.svg"
import './Header.css'



function Header({}){
    const [loopNum,SetloopNum]=useState(0);
    const [isDeleting,SetisDeleting]=useState(false);
const toRotate=["Web Developer", "Web Designer","UI/UX Designer"]
const [text,SetText]=useState('');
const [delta,Setdelta]=useState(300 - Math.random() * 100 )
const period=2000;
useEffect(()=>{
let ticker = setInterval(()=>{
tick();
},delta)
return ()=> (clearInterval(ticker));
},[text])

const tick = ()=>{
let i = loopNum % toRotate.length;
let fullText = toRotate[i];
let updatedText = isDeleting ? fullText.substring(0, text.length-1) :fullText.substring(0, text.length + 1);
SetText(updatedText);
if(isDeleting){
Setdelta(prevdelta => prevdelta /2)
}
if(!isDeleting && updatedText === fullText){
    SetisDeleting(true);
    SetisDeleting(period);
} 
else if(isDeleting && updatedText === ""){
  SetisDeleting(false);
  SetloopNum(loopNum + 1);
  Setdelta(500);
}
}

    return(
   <section className='banner' id='home'>
<Container>
<Row className="align-items-center">
<Col xs={12} md={6} xl={5}>
<img src={headerImg} alt="Header-img"/>
    </Col>
    <Col xs={12} md={6} xl={7}>
        <span className='tagline'>Welcome To My Portfolio </span>
   <h1>{`Hi I'm Muhammad Ahmer`}<span className='wrap'> {text} </span></h1>
    <p className="para">I am a Front-end-Developer,Web-Designer,Web-Developer with a strong skill set and here is my portfolio take a look. </p>
   
   
    </Col>
   
     </Row>
</Container>
   </section>
    )
};
export default Header;
