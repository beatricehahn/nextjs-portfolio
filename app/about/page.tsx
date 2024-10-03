import Image from "next/image";

export default function About() {
    return (
        <div className="max-w-screen-lg mx-auto px-4">
            <h1 className="text-2xl md:text-3xl pb-[24px]">About</h1>
            <div className="rounded-[16px] bg-blue-100 mb-12 flex flex-col items-center sm:flex-row">
                <blockquote className="p-6">
                    <p className="text-2xl md:text-4xl max-w-screen-md mx-auto font-medium">"I see the design process as incremental, iterative, and fluid - like creating a sculpture."</p>
                </blockquote>
                <Image
                    className="w-[60vw] h-auto sm:max-w-md" 
                    src="/images/myphoto-bw.png"
                    width={400}
                    height={400}
                    alt="Picture of Beatrice Hahn"
                />
            </div>
            <section className="flex flex-col md:flex-row">
                <h2 className="md:text-xl md:flex-1">My Design and Development Ideals</h2> 
                <div className="md:flex-1">
                    <p className="pt-0">My design and development ideals are inspired by the sculpture creation process. In development, design, and sculpting, you need to establish good scaffolding to avoid things crumbling in the future. This is necessary for projects to be robust and scalable. There’s also a lot of prototyping and iteration cycles involved to get the right ‘feel’.</p>
                    <p>I love the tools and approaches to modern web development because they make modularity and reusable components easier. This encourages a building-block approach which I liken to the process in modeling clay when you are actively adding and subtracting elements, testing composition and feasibility. </p>
                    <p>When designing, I keep in mind the aesthetics and practicality of an idea. There are always beautiful UI concepts that ultimately are not UX-friendly, nor accessible. I want to strive to deliver accessible designs that are pleasant to navigate and use.</p>
                </div>
            </section>
            <section className="mt-12 flex flex-col md:flex-row">
                <h2 className="md:text-xl md:flex-1">Educational Background</h2>
                <p className="md:flex-1 pt-0">I graduated from the University of Southern California with a Bachelor of Science in Computational Linguistics. My coursework not only provided a foundation in research and experimentation but also taught me programming (C++ and Python), which led me to specialize my interest in web development. This played a significant role in realizing my love for UX/UI and product design. Learning to program helped me understand the underlying structure of web and mobile applications, allowing me to design with both the user experience and technical feasibility in mind.</p>
            </section>

            {/* <h1 className="text-2xl md:text-3xl pb-[24px]">Work Experience</h1>
            <ul>
                <li>year - work</li>
                <li>year - work</li>
                <li>year - work</li>
            </ul> */}
        </div>
    )
}