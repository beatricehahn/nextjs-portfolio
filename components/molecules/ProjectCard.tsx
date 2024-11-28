import Tag from "../atoms/Tag";
import RightArrow from "../atoms/RightArrow";
//import Image from "next/image";

const ProjectCard = (
  { genre, title, imgSrc, tags, link } : { genre : string, title : string, imgSrc : string, tags : string[], link: string }
) => {
  return (
    <div className="mt-[32px] p-8 flex flex-col border-2 sm:flex-row items-center bg-gradient-to-r from-special-candyfloss to-special-coldsteel shadow-lg w-full rounded-[24px] mb-4">
      <div id='projectDescription' className="mb-8">
        <span className="text-[14px] md:text-[16px]">{genre}</span>
        <h3 className='text-[16px] md:text-[20px] my-2'>{title}</h3>
        {/* <div className='flex flex-wrap mb-4'>
          {tags.map((tag, index) => (
            <Tag key={index} label={tag} />
          ))}
        </div> */}
        <a 
          href={link}
          className="my-8 py-[12px] px-[24px] bg-blue-800 rounded-[32px]"
        >
          <span className="text-base md:text-[20px] text-white">Read Case Study</span>
          <div className="ml-[10px] inline">
            <RightArrow />
          </div>
        </a>
      </div>

      <div id='imageContainer' className="w-[50%] h-full relative">
        <div id='imageInner' className="w-full h-full">
          <img
            src={imgSrc}
            alt='Project Picture'
            className="rounded-[16px] m-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard