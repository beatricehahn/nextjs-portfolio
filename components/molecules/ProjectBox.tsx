import Tag from "../atoms/Tag";

const ProjectBox = (
  { id, genre, title, des, img, tags } : { id: number, genre : string, title : string, des: string, img : string, tags : string[] }
) => {
  return (
    <div className=" flex flex-col md:flex-row md:items-start md:justify-between items-center">
      <div className='flex'>
        <span className="font-bold text-4xl mr-10 text-white-800">
          {"0" + id}
        </span>
        <p className="mr-10 text-sm h-[100px]">{des}</p>
      </div>
      <div className="rounded-lg w-full">
          <img 
            src={img}
            alt='Project Picture'
            className="w-full h-auto rounded-lg"
          />
          <div className="m-2">
            <span className="text-sm mb-1 text-white-800">{genre}</span>
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