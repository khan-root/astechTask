import { useState } from "react";

const useNavbarServices = ()=>{
      const [isOpen, setIsOpen] = useState(false);


      const toggleMenu=()=>{
        setIsOpen(!isOpen)
      }


    return {
        isOpen,toggleMenu
    }
}

export default useNavbarServices