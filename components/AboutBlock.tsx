const AboutBlock = () => {
  return (
    <div className='mr-10 ml-10 mt-40 mb-30 text-white-200 pd-20'>
        <h1 id="about" className="font-bold text-purple text-2xl mb-2">ABOUT</h1>
        <img
            className="w-[50%] h-auto mx-auto mb-20"
            src="/images/bw-photo.png" alt="Portrait" 
        />
        <div className="grid grid-cols-2 gap-4">
            <p className="mb-8">I’m a <strong>product designer</strong> and <strong>web developer</strong> based in California who approaches life and work like sculpting clay. I’ve worked on diverse projects ranging from the field of non-profit, healthcare, everyday-living, and games.
            </p>
            <p className="mb-8">
            Like in sculpting, design and development requires good scaffolding to avoid things crumbling in the future. This is necessary for projects to be robust and scalable. There’s also a lot of prototyping and iteration cycles involved to get the right ‘feel’. 
            </p>
            <p className="mb-8">When designing, I keep in mind the aesthetics and practicality of an idea. There are always beautiful UI concepts that ultimately are not UX-friendly, nor accessible. I want to strive to deliver accessible designs that are pleasant to navigate and use.</p>
            <p className="mb-8">I love the tools and approaches to modern web development because they make modularity and reusable components easier. This encourages a building-block approach which I liken to the process in modeling clay when you are actively adding and subtracting elements, testing composition and feasibility.</p>
        </div>
    </div>
  )
}

export default AboutBlock