import { Col } from "react-bootstrap";
export const  ProjectCard =({title,Description,imgUrl})=>{
return(
    <Col sm={6} md={4}>
    <div className="proj-imgbx">
    <img src={imgUrl}  />
    <h4>{title}</h4>
    <div className="proj-txtx"></div>
   <span>{Description}</span>
    
        </div>
    </Col>
)
};
