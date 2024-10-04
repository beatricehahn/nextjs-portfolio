import { CaseHeader } from "@/components/organisms/CaseStudyComponents";
import { CaseContext } from "@/components/organisms/CaseStudyComponents";
import { CaseSnapshot } from "@/components/organisms/CaseStudyComponents";

export default function Reactdx() {
    return (
        <div className="max-w-screen-lg mx-auto px-[18px]">
            <CaseHeader 
            
            />
            <CaseContext 
                brand="React Diagnostics"
                role="UI/UX Designer"
                industry="Healthcare"
                timeline="August-September 2024"
            />
            <CaseSnapshot 
            
            />
        </div>
    )
};