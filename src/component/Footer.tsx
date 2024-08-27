import React from "react";
import { footerLink, socialMeida } from "../utils/Data/FooterCustomData";
import Button from "./Button";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-full bg-primary-gray">
      <div className="bg-footer-wave-img bg-cover bg-no-repeat h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
        <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
          <div className="flex flex-col items-center gap-4">
            <Button
              title="Contact Us"
              bgColor="bg-transparent"
              borderColor="border-white"
            />
            <div className="flex items-center gap-2">
              {socialMeida.map((ele) => {
                const IconComponent = ele.icon;
                return (
                  <div key={ele.id}>
                    <IconComponent className="text-white text-xl" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-white p-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2">
              {footerLink.map((ele) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  key={ele.id}
                  className="mb-1 cursor-pointer"
                >
                  {ele.title}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
