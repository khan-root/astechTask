import React from "react";
import { searchSection } from "../utils/Data/SearchSectionCustomData";
import { GoSearch } from "react-icons/go";
import useSearchService from "../services/__serachSectionService";
import { motion } from "framer-motion";

const SearchSection: React.FC = () => {
  const { handleSetActiveSection, activeSection } = useSearchService();
  return (
    <div className="bg-primary-greenish bg-opacity-50 p-4 md:p-5 rounded-lg md:rounded-full space-y-2 md:space-y-3">
      <div className="flex flex-wrap items-center gap-2 md:gap-4">
        {searchSection?.map((ele) => (
          <div
            key={ele.id}
            onClick={() => handleSetActiveSection(ele.id)}
            className="relative cursor-pointer flex items-center"
          >
            <div className="relative">
              {activeSection === ele.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute left-0 right-0 bottom-[-2px] h-[2px] md:h-[4px] bg-primary-green"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="text-white text-[15px] md:text-[17px]">
                {ele.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center gap-2 bg-primary-green border border-primary-greenish rounded-lg md:rounded-full px-3 py-2 md:px-4 md:py-3">
        <span className="text-[18px] md:text-[20px]">
          <GoSearch color="white" />
        </span>
        <input
          className="w-full outline-none border-none h-full bg-transparent text-primary-gray placeholder:text-primary-gray text-[14px] md:text-[16px]"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchSection;
