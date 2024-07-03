import { projects } from '@/data/index';
import { PinContainer } from './ui/PinContainer';

const RecentProjects = () => {
  return (
    <div className="text-white-100 py-10">
        <h1 className="heading">
            A small selection of {' '}
            <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {projects.map(( { id, title, des, img }) => (
                <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
                    <PinContainer>
                        {title}
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects