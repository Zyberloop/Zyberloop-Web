import ProjectCard from "../components/PrjectCard";

const ProjectSection = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-full max-w-max mx-auto h-full space-y-4">
        <div className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
          Innovative Projects That Shine
        </div>
        <div className="gradient-text2 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center ">
          Our Effort
        </div>
        <div className="max-w-[1160px] w-full mx-auto">
          <ProjectCard
            tag={"Featured  Project"}
            name={"PearlX"}
            description={
              "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
            }
            link={"https://pearlx.zyberloop.net/"}
            flipped={false}
          />
          <ProjectCard
            tag={"Featured  Project"}
            name={"Entrix Lanka.lk"}
            description={
              "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
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
