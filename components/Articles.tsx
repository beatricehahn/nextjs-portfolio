import { articles } from '@/data/index';
import ArticleBox from './molecules/ArticleBox';

export const Articles = () => {
  return (
    <div>
        <h1 className="text-hero heading text-base md:text-4xl">Articles</h1>
        <div
            className="grid sm:grid-col-1 p-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {articles.map(( { id, genre, date, title}) => (
                <div key={id} className=''>
                    {/* <ProjectBox 
                        genre={genre}
                        title={title}
                        img={img}
                        tags={tags}
                    /> */}
                    <ArticleBox
                        id={id}
                        genre={genre}
                        date={date}
                        title={title}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}
