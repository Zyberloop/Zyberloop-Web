import ProjectCard from "../components/PrjectCard";

const ProjectSection = () => {
  return (
    <div className="w-full h-full py-10 overflow-hidden">
      <div className="w-full max-w-max mx-auto h-full space-y-8 flex flex-col justify-center items-center">
        <div className="gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center max-w-7xl px-4">
          Innovative Projects That Shine Our Effort
        </div>

        <div className="max-w-[1160px] w-full mx-auto space-y-10 px-4">
          <ProjectCard
            tag={"Featured Project"}
            name={"PearlX"}
            description={
              "At PearlX, we develop innovative, reliable, and user-friendly software solutions for booking spaces. Using cutting-edge technologies and agile methodologies, we create high-quality applications that cater to our clients' unique needs, ensuring seamless operations and outstanding user experiences."
            }
            link={"/pearlx.webp"}
            flipped={false}
          />
          <ProjectCard
            tag={"Featured Project"}
            name={"Entrix Lanka.lk"}
            description={
              "We designed and built the Entrix Lanka website to showcase their solar energy solutions effectively. Additionally, we manage their social media marketing efforts, focusing on increasing customer interaction and building a stronger brand presence online. This combined approach ensures that Entrix Lanka's digital presence is engaging and well-aligned with their business goals."
            }
            link={"/entrix.webp"}
            flipped={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
