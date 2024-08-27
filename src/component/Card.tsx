import React from "react";
import { CardProps } from "../interfaces/componentInterface/componentInterfaces";

const Card: React.FC<CardProps> = (props) => {
  const { bgImage } = props;
  return (
    <div className="h-[180px] w-[180px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px]">
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
      ></div>
    </div>
  );
};

export default Card;
