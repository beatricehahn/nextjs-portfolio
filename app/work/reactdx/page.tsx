import { CaseHeader } from "@/components/organisms/CaseStudyComponents";
import { CaseContext } from "@/components/organisms/CaseStudyComponents";
import { CaseSnapshot } from "@/components/organisms/CaseStudyComponents";

export default function Reactdx() {
    return (
        <div className="max-w-screen-lg mx-auto px-[18px]">
            <CaseHeader 
                imageSrc="/images/work-img-placeholder.png"
                title="React DX Mobile UI Redesign"
            />
            <CaseContext 
                brand="React Diagnostics"
                role="UI/UX Designer"
                industry="Healthcare"
                timeline="August-September 2024"
            />
            <CaseSnapshot 
                businessSrc="/"
                userSrc="/"
                solutionSrc="/"
                businessProblem=""
                userProblem=""
                solution=""
            />
        </div>
    )
};