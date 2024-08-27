import { useState } from "react";

const useSearchService = ()=>{

    const [activeSection, setActiveSection] = useState<number | 1>(1);

    const handleSetActiveSection = (id: number) => {
        setActiveSection(id);
    };


    return {
        activeSection, handleSetActiveSection
    }


}
export default useSearchService