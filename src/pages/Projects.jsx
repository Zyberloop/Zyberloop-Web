import ContactForm from "../sections/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSectionProjects from "../sections/HeroSectionProjects";
import ProjectSlider from '../sections/ProjectSlider';


const Projects = () => {
  return (
    <div className="w-full  bg-primary">

      <HeroSectionProjects/>
      <ProjectSlider />
      
      <ContactForm />


    </div>
  );
};

export default Projects;
