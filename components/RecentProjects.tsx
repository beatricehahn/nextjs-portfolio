import { projects } from '@/data/index';
import ProjectBox from './molecules/ProjectBox';

const RecentProjects = () => {
  return (
    <div id="works" className="text-white-100 py-10 m-4">
        <h1 className="heading text-base md:text-4xl">
            A selection of {' '}
            <span className="text-purple">recent works</span>
        </h1>
        <div
            className="grid sm:grid-col-1 p-4 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
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