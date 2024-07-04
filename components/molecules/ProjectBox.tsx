import Tag from "../atoms/Tag";

const ProjectBox = () => {
  return (
    <div className="rounded-lg border-2 border-solid border-white-800 ">
        <img 
          src='/images/work-img-placeholder.png' 
          alt='Project Picture'
          className="w-[200px] h-auto"
        />
        <span>genre</span>
        <h6>TITLE</h6>
        <Tag label='Design'/>
    </div>
  )
}

export default ProjectBox