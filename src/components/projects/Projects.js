
import {motion} from 'framer-motion';



import ProjectSingle from "./ProjectSingle";
import "./projects.css";
import "./responsive.css"
import AiImg from "../../assets/projects/s.png";
import NetflikImg from "../../assets/projects/netflik.png";
import LandessaImg from "../../assets/projects/landessa.png";
import LoginImg from "../../assets/projects/login.png";

const projectsData = [
  {
    title: "GPT-3 AI",
    tech: "React, CSS, Html, BEM Methodology",
    description:
      "Fully Responsive Modern UI/UX Website in React JS, Modern GPT-3 landing page",
    image: AiImg,
    liveSite: "https://fastidious-marigold-f60bea.netlify.app/",
    githubRepo: "https://github.com/besirk/modern"
  },
  {
    title: "Netflik",
    tech: "React, CSS, Html",
    description:
      "MoviesApp created using ReactJS, API",
    image: NetflikImg,
    liveSite: "https://teal-otter-956002.netlify.app/",
    githubRepo: "https://github.com/besirk/MoviesApp"
  },
  {
    title: "Landessa",
    tech: "React, TypeScript, Redux, Firebase, CSS, Html",
    description:
      "This is a fully Responsive with a modern UI/UX  Website. This website is created using html,css and some js library like aos(animate-on-scroll).",
    image: LandessaImg,
    liveSite: "https://sad-ardinghelli-715a4c.netlify.app/",
    githubRepo: "https://github.com/besirk/landessa-mk"
  },
  {
    title: "Login Page",
    tech: "Html, CSS, JS",
    description:
      "This is a fully Responsive with a modern UI/UX  Website. This website is created using HTML, CSS and Javascript",
    image: LoginImg,
    liveSite: "https://magenta-raindrop-cf445c.netlify.app",
    githubRepo: "https://github.com/besirk/landessa-mk"
  }
  
];

const Projects = () => {
  return (
    <motion.section id="projects" 
      initial = {{opacity:0}}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >

      <div className="container">
        <div className="row">
          
            <motion.h1 className="section__title" 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:0.7}}
            >
              Here are some of my Projects
            </motion.h1>
              
            
          
          <motion.ul className="project__list"
         initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:0.9}}>
            {projectsData.map((projectData, index) => {
              return (
                <ProjectSingle 
                  projectData={projectData}
                  key={index}
                  index={index}
                />
              );
            })}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
