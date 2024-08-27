import { navbarList } from "../utils/Data/NavbarCustomData";
import images from "../utils/imagesImport";
import { GoDotFill, GoSearch } from "react-icons/go";
import { LuUserCircle } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { NavabrProps } from "../interfaces/componentInterface/componentInterfaces";
import { FaXmark } from "react-icons/fa6";

const Navbar: React.FC<NavabrProps> = (props) => {
  const { isOpen, toggleMenu } = props;

  return (
    <>
      <nav className="w-full flex items-center justify-between bg-primary-gray py-5 px-3">
        <div className="cursor-pointer">
          <img
            src={images.LogoPNG}
            className="h-full w-full object-contain"
            alt="Logo"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex lg:items-center lg:gap-5">
            {navbarList.map((ele) => (
              <motion.div
                whileHover={{ scale: 1.2 }}
                key={ele.id}
                className="flex items-center gap-1 cursor-pointer overflow-hidden"
              >
                <span>
                  <GoDotFill />
                </span>
                <span className="text-default-black text-[15px]">
                  {ele.name}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="ms-3">
            <span className="h-8 w-8 flex items-center justify-center rounded-full text-[20px] bg-secondary-green text-white cursor-pointer">
              <GoSearch />
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span>sign in </span>
            <span className="text-[30px] cursor-pointer">
              <LuUserCircle />
            </span>
          </div>
          <div className="lg:hidden" onClick={toggleMenu}>
            <span className="cursor-pointer">
              <RxHamburgerMenu />
            </span>
          </div>
        </div>
      </nav>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        exit={{ x: "100%" }} // Smooth transition on exit
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 15,
          mass: 0.6,
        }}
        className={`fixed top-0 right-0 h-full w-full z-50 ${
          isOpen ? "bg-black bg-opacity-50" : "bg-transparent"
        } flex justify-end`}
        onClick={toggleMenu} // Close menu when clicking outside
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 15,
            mass: 0.6,
          }}
          className="bg-primary-lightgreen h-full w-64 p-4" // Side menu container
          onClick={(e) => e.stopPropagation()} // Prevent overlay close when clicking inside menu
        >
          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="text-white"
            >
              <FaXmark />
            </motion.button>
          </div>
          <ul className="mt-8 space-y-4">
            {navbarList.map((ele) => (
              <li key={ele.id} className="text-white text-lg">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <span>
                    <GoDotFill />
                  </span>
                  <span>{ele.name}</span>
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
