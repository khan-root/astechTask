import CourseExploration from "./CourseExploration";
import { countData } from "../../utils/Data/CountCustomData";
import { detailsData } from "../../utils/Data/DetailsCustomData";
import { Card } from "../../component";
import images from "../../utils/imagesImport";
import ProgramSection from "./ProgramSection";
import OurPartner from "./OurPartner";
import Events from "./Events";
import Counter from "./Counter";

const Home = () => {
  return (
    <>
      <div className="w-full pb-20  bg-primary-green">
        <div className="flex flex-col gap-10 p-2">
          <div className="flex items-center justify-center">
            <CourseExploration />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {countData?.map((ele) => (
              <div
                key={ele.id}
                className="bg-primary-lightgreen h-40 w-40 md:h-48 md:w-48 lg:h-50 lg:w-50 flex items-center justify-center"
              >
                <div className="flex flex-col items-center">
                  <Counter number={ele.count} />
                  <span className="text-white text-[20px]">{ele.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-wrap items-center justify-center gap-2">
            {detailsData.map((ele) => (
              <Card key={ele.id} bgImage={ele.bgImg} />
            ))}
          </div>
        </div>
        <div className="">
          <img
            src={images.internationAdmissionImg}
            alt="internation-img"
            className="w-full"
          />
        </div>
      </div>
      <ProgramSection />
      <div className=" bg-primary-gray">
        <OurPartner />
      </div>

      <div className="bg-primary-gray py-5 w-full px-10">
        <div className="w-full bg-primary-green rounded-none lg:rounded-lg mt-4 lg:mt-6">
          <div className="flex flex-col gap-2 p-4 lg:p-6">
            <div className="lg:text-xl text-default-gray font-bold mb-4 lg:mb-0">
              <span>Easy Steps for Admission</span>
            </div>
            <div className="flex flex-row justify-between lg:text-xl text-default-gray font-bold mb-4 lg:mb-0">
              <span>
                1. Choose Course and Institute 2. Submit Application 3. After
                Confirmation Pay Online
              </span>
              <span className="text-secondary-lightgreen">“Apply Now”</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-gray">
        <Events />
      </div>
      <div className="bg-primary-gray py-5 w-full px-10">
        <div className="">
          <img
            src={images.careerPathImg}
            alt="career"
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="w-full bg-primary-green rounded-none lg:rounded-lg mt-4 lg:mt-6">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between p-4 lg:p-6">
            <div className="flex flex-col items-center text-base lg:text-xl text-default-gray font-bold mb-4 lg:mb-0">
              <span>Live Chat</span>
              <span>Whatsapp</span>
            </div>
            <img
              src={images.whatsAppImg}
              alt="whatsapp"
              className="h-8 lg:h-10 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
