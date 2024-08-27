import { useEffect } from "react";
import { Footer, HeroSection, Navbar } from "./component";
import useNavbarServices from "./services/__navbarServices";
import { Home } from "./view";

const App: React.FC = () => {
  const { isOpen, toggleMenu } = useNavbarServices();
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on the entire page
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the menu is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div className="flex flex-col">
      <div className="fixed w-full top-0 z-40">
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      <div className="w-full mt-[75px]">
        <HeroSection />
      </div>
      <div className="w-full flex-1">
        <Home />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default App;
