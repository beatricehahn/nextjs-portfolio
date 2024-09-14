import { projects } from '@/data/index';
import ProjectBox from './molecules/ProjectBox';

const RecentProjects = () => {
  return (
    <div id="works" className="text-white-100 py-10 w-full flex-col justify-center items-center">
        <h1 className="font-bold text-left text-[20px] md:text-4xl">Selected Work</h1>
        <div
            className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-2 md:gap-4 mt-10">
            {projects.map(( { id, genre, title, img, tags }) => (
                <div key={id} className=''>
                    <ProjectBox 
                        genre={genre}
                        title={title}
                        img={img}
                        tags={tags}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects