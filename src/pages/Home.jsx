import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import TechStack from "../sections/TechStack";
import CardSection from "./CardSection";

const Home = () => {
  return (
    <div className="w-full  bg-primary">
      <Navbar />
      <HeroSection />
      <CardSection />
      <TechStack />
    </div>
  );
};

export default Home;
