import { projects } from '@/data/index';
import ProjectBox from './ProjectBox';

const RecentProjects = () => {
  return (
    <div id="works" className="text-white-100 py-10 w-full flex-col justify-center items-center">
        <h2 className="text-left text-[20px] md:text-[32px]">Selected Work</h2>
        <p className='md:w-[50vw] mb-0 pb-0'>My work spans across a diverse range of projects, including non-profit, healthcare, education, and interactive media.</p>
        <div
            className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-2 md:gap-4 mb-10">
            {projects.map(( { id, genre, title, img, tags, link }) => (
                <div key={id} className=''>
                    <ProjectBox 
                        genre={genre}
                        title={title}
                        img={img}
                        tags={tags}
                        workLink={link}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects