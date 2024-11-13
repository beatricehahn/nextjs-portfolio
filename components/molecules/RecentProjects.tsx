import { projects } from '@/data/index';
import ProjectCard from './ProjectCard';

const RecentProjects = () => {
  return (
    <div id="works" className="text-white-100 py-10 w-full flex-col justify-center items-center">
        <h2 className="text-left text-[20px] md:text-[32px]">Selected Work</h2>
        <p className='md:w-[50vw] mb-0 pb-0'>My work spans across a diverse range of projects, including non-profit, healthcare, education, and interactive media.</p>
        {
          // projects.map(( { id, genre, title, img, tags, link }) => (
          //   <ProjectCard key={id} {...project}/>
          // ))
          projects.map( (project, index) => {
            return <ProjectCard key={index} {...project} />
          })
        }
    </div>
  )
}

export default RecentProjects