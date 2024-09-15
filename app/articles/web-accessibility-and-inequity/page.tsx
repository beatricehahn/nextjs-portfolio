import { writing } from "@/data";

export default function WebAccessibility() {
    const { title, subtitle, date, content, sources } = writing[0];

    return (
        <div className="mx-[24px] md:mx-20">
            <h1 className="font-bold">{title}</h1>
            <h5>{subtitle}</h5>
            <h6>Written on {date} by Beatrice Hahn</h6>
            <div>
                {content.map((paragraph, index) => (
                    <p key={index} className="my-[24px]">{paragraph}</p>
                ))}
            </div>
            <h1 className="font-bold">Works Cited</h1>
            <ul>
                {sources.map((source, index) => (
                    <li key={index} className="my-[24px]">{source}</li>
                ))}
            </ul>
        </div>
    )
};