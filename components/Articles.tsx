import { articles } from '@/data/index';
import ArticleBox from './molecules/ArticleBox';

export const Articles = () => {
  return (
    <div className=''>
        <h1 className="font-bold text-left text-[20px] md:text-4xl">Articles</h1>
        <div
            className="grid grid-col-1 md:gap-4 mt-10">
            {articles.map(( { id, genre, date, title, link }) => (
                <div key={id} className=''>
                    <ArticleBox
                        id={id}
                        genre={genre}
                        date={date}
                        title={title}
                        link={link}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}
