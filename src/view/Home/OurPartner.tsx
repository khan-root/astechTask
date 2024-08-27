import React from "react";
import { ourPartnerCustomData } from "../../utils/Data/ProgramCustomData";
import { Card } from "../../component";

const OurPartner: React.FC = () => {
  return (
    <div className="w-full px-10">
      <div className="flex items-center gap-5 lg:gap-10">
        <div className="flex items-center space-x-1 text-3xl font-semibold">
          <span className="text-primary-green">Our</span>
          <span className="text-default-black">Partner</span>
        </div>
        <div className="bg-primary-green text-default-gray py-2 px-3 rounded-full text-2xl font-semibold cursor-pointer">
          <span>Apply for the partnership</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 bg-primary-gray">
        {ourPartnerCustomData.map((ele) => (
          <Card key={ele.id} bgImage={ele.bgImg} />
        ))}
      </div>
    </div>
  );
};

export default OurPartner;
