import Tag from "../atoms/Tag";

const ProjectBox = (
  { genre, title, img, tags } : { genre : string, title : string, img : string, tags : string[] }
) => {
  return (
    <div className=" flex flex-col md:flex-row md:items-start md:justify-between items-center">
      <div className="w-full">
          <img 
            src={img}
            alt='Project Picture'
            className=""
          />
          <div className="m-2 mix-blend-difference">
            <span className="text-sm mb-1 text-white-200">{genre}</span>
            <h6 className='text-lg font-bold mb-2'>{title}</h6>
            {tags.map((tag) => (
              <Tag label={tag} />
            ))}
          </div>
      </div>
    </div>
  )
}

export default ProjectBox