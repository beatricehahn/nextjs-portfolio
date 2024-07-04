import Tag from "../atoms/Tag";

const ProjectBox = (
  { id, genre, title, des, img, tags } : { id: number, genre : string, title : string, des: string, img : string, tags : string[] }
) => {
  return (
    <div className="flex p-10">
      <span className="font-bold text-4xl mr-10 text-white-800">
        {"0" + id}
      </span>
      <p className="mr-10 text-sm h-[100px] md:w-[500px]">{des}</p>
      <div className="rounded-lg">
          <img 
            src={img}
            alt='Project Picture'
            className="w-full h-auto rounded-lg"
          />
          <div className="m-2">
            <span className="text-sm mb-1">{genre}</span>
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