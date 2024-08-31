import ProjectCard from "../components/PrjectCard";

const ProjectSection = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full max-w-max mx-auto h-full">
        <div className="gradient-text text-7xl text-center">
          Innovative Projects That Shine
        </div>
        <div className="gradient-text2 bg-clip-text text-transparent text-center text-7xl mt-4">
          Our Effort
        </div>
        <div className="max-w-[1160px] w-full mx-auto">
          <ProjectCard
            tag={"Featured  Project"}
            name={"PearlX"}
            description={
              "At PearlX, we develop innovative, reliable, and user-friendly software solutions for booking spaces. Using cutting-edge technologies and agile methodologies, we create high-quality applications that cater to our clients' unique needs, ensuring seamless operations and outstanding user experiences."
            }
            link={"https://pearlx.zyberloop.net/"}
            flipped={false}
          />
          <ProjectCard
            tag={"Featured  Project"}
            name={"Entrix Lanka.lk"}
            description={
              "We designed and built the Entrix Lanka website to showcase their solar energy solutions effectively. Additionally, we manage their social media marketing efforts, focusing on increasing customer interaction and building a stronger brand presence online. This combined approach ensures that Entrix Lanka's digital presence is engaging and well-aligned with their business goals."
            }
            link={"https://www.entrixlanka.lk/"}
            flipped={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
