import { BsGithub } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import "./projects.css";
import {motion} from 'framer-motion'

const ProjectSingle = ({ projectData, index }) => {
 
  return (
    <motion.li key={index} className="project" initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{delay:0.5}} >
      <div className="project__wrapper">
        <img
          className="project__img"
          alt="temp_project"
          src={projectData.image}
        />
        <div className="project__wrapper--bg"></div>
        <div className="project__description">
          <h3 className="project__description--title">{projectData.title}</h3>
          <h4 className="project__description--sub-title">
            {projectData.tech}
          </h4>
          <p className="project__description--para">
            {projectData.description}
          </p>
          <div className="project__description--links">
            <a
              target={"_blank"}
              rel="noreferrer"
              href={projectData.githubRepo}
              className="project__description--link"
            >
              <BsGithub />
            </a>
            <a
              href={projectData.liveSite}
              target={"_blank"}
              rel="noreferrer"
              className="project__description--link"
            >
              <BiLink />
            </a>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default ProjectSingle;
