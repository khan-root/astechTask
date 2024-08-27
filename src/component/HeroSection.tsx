import React from "react";
import Button from "./Button";
import SearchSection from "./SearchSection";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-banner-img bg-no-repeat bg-cover h-[500px]">
      <div className="h-full pt-5 pb-2 px-2">
        <div className="flex justify-end">
          <Button
            title="Create Your Account"
            bgColor="bg-[#6D978B]"
            color="text-[#EDEDED]"
          />
        </div>
        <div className="h-fit flex flex-col gap-2 items-center justify-center">
          <span className="text-3xl font-semibold text-white">
            Connecting People to Education
          </span>

          <SearchSection />
          <span className="text-primary-gray text-[17px]">
            Apply to Any University, College, School and Hostel
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
