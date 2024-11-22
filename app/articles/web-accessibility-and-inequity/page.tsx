import { writing, articles } from "@/data";

export default function WebAccessibility() {
    const { title, subtitle, date, content, sources } = writing[0];
    const { img } = articles[1];

    return (
        <div className="max-w-screen-md mx-auto px-[18px]">
            <img src={img} alt="Article visual" className="aspect-[4/3] w-full"/>
            <h1 className="text-2xl md:text-3xl py-[24px]">{title}</h1>
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