import Project from "react";
import Projectcard from "./Projectcard";
import img1 from "./assets/free-stock-image-1.jpg";
import img2 from "./assets/free-stock-image-2.jpg";
import img3 from "./assets/free-stock-image-3.jpg";
function Projects(){
    return(
        <div className="text-center">
            <h2 ><span className="text-info">poject</span>section</h2>
  <div className="project_div">
      <Projectcard src={img1} name="project1"/>
      <Projectcard src={img2} name="project2"/>
      <Projectcard src={img3} name="project3"/>
  </div>
        </div>
 
  )
}

export default Projects;