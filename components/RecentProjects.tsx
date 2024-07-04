import { projects } from '@/data/index';
import { PinContainer } from './ui/PinContainer';
import ProjectBox from './molecules/ProjectBox';

const RecentProjects = () => {
  return (
    <div id="work" className="text-white-100 py-10">
        <h1 className="heading">
            A selection of {' '}
            <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-col items-center justify-between p-4 gap-16 mt-10 w-full">
            {projects.map(( { id, genre, title, des, img, tags }) => (
                <div key={id} className=' flex items-center justify-center sm:w-96 w-[80vw]'>
                    <ProjectBox 
                        id={id}
                        genre={genre}
                        title={title}
                        des={des}
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