import Tag from "../atoms/Tag";
import RightArrow from "../atoms/RightArrow";

const ProjectBox = (
  { genre, title, img, tags } : { genre : string, title : string, img : string, tags : string[] }
) => {
  return (
    <div className="my-[32px] md:my-4 flex flex-col md:flex-row md:items-start md:justify-between items-center">
      <div className="">
          {/* <img 
            src={img}
            alt='Project Picture'
            className="rounded-[16px] w-full aspect-[4/3]"
          /> */}
          <div className='rounded-[16px] w-full aspect-[4/3] bg-blue-100'></div>
          <div className="m-2 w-full">
            <span className="text-[14px] md:text-[16px] mb-1">{genre}</span>
            <h3 className='text-[16px] md:text-[20px] mb-2'>{title}</h3>
            {/* {tags.map((tag) => (
              <Tag label={tag} />
            ))} */}
          </div>
          <a 
              href="/casestudyurl"
              className="py-[10px] px-[24px] bg-purple-bright rounded-[8px]"
            >
              <span className="text-[20px] text-white">Read Case Study</span>
              <div className="ml-[10px] inline">
                <RightArrow />
              </div>
          </a>
      </div>
    </div>
  )
}

export default ProjectBox