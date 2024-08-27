import { Card } from "../../component";
import {
  programCustomData,
  shortCourseCustomData,
  stayCustomData,
} from "../../utils/Data/ProgramCustomData";

const ProgramSection = () => {
  return (
    <div className="w-full bg-primary-gray ">
      <div className="lg:space-y-2">
        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 bg-programSection-wave-img bg-no-repeat w-full bg-cover">
          {programCustomData.map((ele) => (
            <div className="flex justify-end items-end">
              <Card key={ele.id} bgImage={ele.bgImg} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 bg-primary-gray">
          {shortCourseCustomData.map((ele) => (
            <Card key={ele.id} bgImage={ele.bgImg} />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 bg-primary-gray">
          {stayCustomData.map((ele) => (
            <Card key={ele.id} bgImage={ele.bgImg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
