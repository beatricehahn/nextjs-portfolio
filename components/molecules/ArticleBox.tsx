const ArticleBox = (
    { id, genre, date, title, link, img} : { id: number, genre : string, date: string, title : string, link: string, img: string }
  ) => {
    return (
      <div key={id} className="">
        <a className="shadow-lg mb-4 rounded-[16px] flex flex-col" href={link}>
          <img src={img} alt="Article Image" className="rounded-t-[16px] m-auto w-full aspect-[4/3]"/>
          <div className="mx-4 my-4">
            <span className="text-md mb-2 mr-2">{date}</span>
            <span className="text-lg">&#183;</span>
            <h6 className="inline text-md ml-2 text-purple-bright" >{genre}</h6>
            <h5 className='text-lg'>{title}</h5>
          </div>
        </a>
      </div>
    )
  }
  
  export default ArticleBox;