const ProjectCard = ({ tag, name, description, link, flipped }) => {
  return (
    <div
      className={`relative w-full h-full mt-10 flex ${
        flipped ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Left Side (Content) */}
      <div
        className={`w-2/3 mb-10 h-full p-4 text-[#CCD6F6] z-10 ${
          flipped ? "-ml-16" : "-mr-16"
        }`}
      >
        <p
          className={`bg-gradient-to-br from-[#7879F1] to-[#45468B] bg-clip-text text-transparent text-xl my-2 ${
            flipped ? "text-end" : "text-start"
          }`}
        >
          {tag}
        </p>
        <h1
          className={`text-2xl font-bold mb-4 ${
            flipped ? "text-end" : "text-start"
          }`}
        >
          {name}
        </h1>
        <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-lg text-sm">
          {description}
        </div>
      </div>

      {/* Right Side (Link as iframe) */}
      <div className="w-2/3 p-4 z-0">
        <iframe
          src={link}
          title={name}
          className="w-full h-full border-0 rounded-xl"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectCard;
