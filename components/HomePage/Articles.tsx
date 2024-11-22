import { articles } from '@/data/index';
import ArticleBox from '../molecules/ArticleBox';

export const Articles = () => {
  return (
    <div className=''>
        <h2 className="text-left text-[20px] md:text-4xl">Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {articles.map(( { id, genre, date, title, link, img }) => (
                <div key={id} className=''>
                    <ArticleBox
                        id={id}
                        genre={genre}
                        date={date}
                        title={title}
                        link={link}
                        img={img}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}
