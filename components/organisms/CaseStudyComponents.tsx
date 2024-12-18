//import Image from "next/image";

interface CaseHeaderProps {
    imageSrc: string;
    title: string;
}

interface CaseContextProps {
    brand: string;
    role: string;
    industry: string;
    timeline: string;
}

interface CaseSnapshotProps {
    businessSrc: string;
    userSrc: string;
    solutionSrc: string;
    businessProblem: string;
    userProblem: string;
    solution: string;
}

export const CaseHeader = ({ imageSrc, title="title" }: CaseHeaderProps) => {
    return (
        <div className="">
            <div>
                {/* <img className="" src={imageSrc} alt={`${title} project image`} /> */}
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export const CaseContext = ({ brand="Company/Group Name", role="role name", industry="genre", timeline="month-month year" } : CaseContextProps) => {
    return (
        <div className="custom-casecontext">
            <div>
                <h6>Brand</h6>
                <p>{brand}</p>
            </div>
            <div>
                <h6>Role</h6>
                <p>{role}</p>
            </div>
            <div>
                <h6>Industry</h6>
                <p>{industry}</p>
            </div>
            <div>
                <h6>Timeline</h6>
                <p>{timeline}</p>
            </div>
        </div>
    )
};

export const CaseSnapshot = ({ businessSrc, userSrc, solutionSrc, businessProblem="Business problem goes here", userProblem="User problem goes here", solution="Solution goes here" } : CaseSnapshotProps) => {
    return (
        <div>
            <h4>Case Study Snapshot</h4>
            <div className="custom-casecontext">
                <div className="t">
                    <img className="" src={businessSrc} alt="Business problem icon" />
                    <h6>Business Problem</h6>
                    <p className="">{businessProblem}</p>
                </div>
                <div className="">
                    <img className="" src={businessSrc} alt="Business problem icon"  />
                    <h6>User Problem</h6>
                    <p>{userProblem}</p>
                </div>
                <div className="">
                    <img className="" src={businessSrc} alt="Business problem icon"  />
                    <h6>Solution</h6>
                    <p>{solution}</p>
                </div>
            </div>
        </div>
    )
};