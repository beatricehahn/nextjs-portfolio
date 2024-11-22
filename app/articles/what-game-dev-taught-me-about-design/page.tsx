import { articles } from "@/data";
export default function GameDevArticle() {
    const { title, date, img } = articles[0];
    return (
        <div className="max-w-screen-md mx-auto px-[18px]">
            <img src={img} alt="Article visual" className="aspect-[4/3] w-full"/>
            <h1 className="text-2xl md:text-3xl py-[24px]">{title}</h1>
            <h4>I spent over a year learning game development and this is what I learned</h4>
            <h6>Written on {date} by Beatrice Hahn</h6>
        </div>
    )
};