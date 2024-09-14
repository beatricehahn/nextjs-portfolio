import Tag from "../atoms/Tag";

const ProjectBox = (
  { genre, title, img, tags } : { genre : string, title : string, img : string, tags : string[] }
) => {
  return (
    <div className="my-[32px] md:my-4 flex flex-col md:flex-row md:items-start md:justify-between items-center">
      <div className="w-full">
          <img 
            src={img}
            alt='Project Picture'
            className="rounded-[16px] w-full aspect-[4/3]"
          />
          <div className="m-2 mix-blend-difference">
            <span className="text-[14px] md:text-[16px] lg:text-[22px] mb-1 text-white-200">{genre}</span>
            <h6 className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] font-bold mb-2'>{title}</h6>
            {/* {tags.map((tag) => (
              <Tag label={tag} />
            ))} */}
          </div>
      </div>
    </div>
  )
}

export default ProjectBox