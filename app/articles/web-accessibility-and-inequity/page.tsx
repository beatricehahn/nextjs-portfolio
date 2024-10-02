import { writing } from "@/data";

export default function WebAccessibility() {
    const { title, subtitle, date, content, sources } = writing[0];

    return (
        <div className="mx-[24px] md:mx-20">
            <h1 className="">{title}</h1>
            <h4>{subtitle}</h4>
            <h6>Written on {date} by Beatrice Hahn</h6>
            <div>
                {content.map((paragraph, index) => (
                    <p key={index} className="my-[24px]">{paragraph}</p>
                ))}
            </div>
            <h4 className="">Works Cited</h4>
            <ul>
                {sources.map((source, index) => (
                    <li key={index} className="my-[24px]">{source}</li>
                ))}
            </ul>
        </div>
    )
};