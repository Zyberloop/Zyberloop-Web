const Navbar = () => {
  return (
    <div className="w-full h-32 bg-navbar-gradient">
      <div className="max-w-max w-full mx-auto h-32 flex justify-between relative">
        <img src={"cloud.webp"} className="absolute" />
        <div className="flex items-center">
          <img src={"/ZL.webp"} className="w-64 h-16" />
        </div>
        <div className="flex gap-8 items-center text-xl text-white">
          <div>Home</div>
          <div>Discover</div>
          <div>Marketplace</div>
          <div>Careers</div>
          <div>Community</div>
        </div>
        <div className="flex items-center relative">
          <button className="bg-button_base h-16 w-48 rounded-full text-lg text-white">
            Contact Us
          </button>
          <img src={"stars.webp"} className="absolute w-9 h-12 -left-8 top-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
