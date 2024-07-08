import { projects } from '@/data/index';
import ProjectBox from '@/components/molecules/ProjectBox';

export default function Work() {
    return (
        <div>
            <h1>WORK</h1>
            <div>
                <span>View by:</span>
                <button>All</button>
                <button>UX/UI</button>
                <button>Development</button>
                <button>UI Animation</button>
                <button>UX Case Study</button>
            </div>
            <div>
                {projects.map(( { id, genre, title, des, img, tags }) => (
                    <div key={id} className=' flex items-center justify-center'>
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
    );
}