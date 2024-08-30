import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import CardSection from "./CardSection";

const Home = () => {
  return (
    <div className="w-full bg-primary">
      <Navbar />
      <HeroSection />
      <CardSection />
    </div>
  );
};

export default Home;
