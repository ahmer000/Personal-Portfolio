import './Project.css'
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
function Project({}){
    return(
      <section id="projects">
      <div class="projects-container">
        <div class="projects-header">
          <h1 class="section-title">Recent <span>Projects</span></h1>
        </div>
        <div class="all-projects">
          <div class="project-item">
            <div class="project-info">
              <h1>Project 1</h1>
              <h2>Coding is Love</h2>
              <p className="para-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
                rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
                harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
            </div>
            <div class="project-img">
              <img src={image1} alt="img"></img>
            </div>
          </div>
          <div class="project-item-2">
            <div class="project-img-2">
              <img src={image2} alt="img" ></img>
            </div>
            <div class="project-info-2">
              <h1>Project 2</h1>
              <h2>Coding is Love</h2>
              <p className="para-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
                rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
                harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
            </div>
            
          </div>
          <div class="project-item">
            <div class="project-info">
              <h1>Project 3</h1>
              <h2>Coding is Love</h2>
              <p className="para-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
                rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
                harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
            </div>
            <div class="project-img">
              <img src={image3} alt="img"></img>
            </div>
          </div>
          <div class="project-item-2">
          <div class="project-img-2">
              <img src={image4} alt="img"></img>
            </div>
            <div class="project-info-2">
              <h1>Project 4</h1>
              <h2>Coding is Love</h2>
              <p className="para-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
                rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
                harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
            </div>
            
          </div>
          <div class="project-item">
            <div class="project-info">
              <h1>Project 5</h1>
              <h2>Coding is Love</h2>
              <p className="para-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde
                rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt
                harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
            </div>
            <div class="project-img">
              <img src={image5} alt="img"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
};
    

export default Project;