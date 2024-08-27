import { eventsData } from "../../utils/Data/ProgramCustomData";
import { IoIosArrowForward } from "react-icons/io";

const Events = () => {
  return (
    <div className="w-full  space-y-4 px-10">
      <div className="flex items-center gap-20">
        <div className="flex items-center space-x-1 text-3xl font-semibold">
          <span className="text-primary-green">Event</span>
          <span className="text-default-black">and Open Days</span>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap gap-2 lg:gap-4">
          {eventsData.map((ele) => (
            <div
              key={ele.id}
              className="flex flex-col flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden"
            >
              <div className="w-full h-60">
                <img
                  src={ele.bgImg}
                  alt={ele.bgImg}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <span className="block mb-2 text-gray-700">
                  {ele.description}
                </span>
                <div className="flex items-center justify-between border-t border-gray-300 pt-2 mt-auto cursor-pointer">
                  <span className="text-primary-green capitalize">
                    {ele.readMore}
                  </span>
                  <IoIosArrowForward className="text-primary-green" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
