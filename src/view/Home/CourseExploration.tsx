import { Card } from "../../component";
import images from "../../utils/imagesImport";

const CourseExploration = () => {
  return (
    <div className="flex items-center gap-4 relative w-full px-10">
      {/* Left Side: Card */}
      <div className="absolute bottom-[5%] lg:bottom-[-10%] lg:left-[5%] md:left-4 ">
        <Card
          title="Course Exploration"
          bgImage={images.CourseExplorationImg}
        />
      </div>

      {/* Right Side: Images and Text */}
      <div className="flex flex-1 gap-4 flex-wrap items-end justify-end">
        <div>
          <img
            src={images.NursingAd}
            alt="Nursing Ad 1"
            className="h-[170px] object-contain"
          />
        </div>
        <div className="flex flex-col items-center gap-2 bg-black text-white py-6 px-2 max-w-xs h-[170px]">
          <span className="text-lg font-bold">OPPORTUNITY</span>
          <span className="text-sm">
            Want to start your own University or Institute? Get expert advice
            and a detailed feasibility report. Let's make your vision a reality!
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseExploration;
