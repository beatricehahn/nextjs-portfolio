const ArticleBox = (
    { id, genre, date, title, link} : { id: number, genre : string, date: string, title : string, link: string }
  ) => {
    return (
      <div key={id} className="flex width-full">
        <a className="border-2 mb-4 rounded-[16px] flex-grow" href={link}>
          {/* <div className="width-[20px] height-[20px] bg-black-200"></div> */}
          <div className="mx-4 my-4 mix-blend-difference">
            <span className="text-[14px] mb-2 mr-2 text-white-200">{date}</span>
            <span className="text-[14px] text-white-200">&#183;</span>
            <span className="text-[14px] ml-2 text-white-200" >{genre}</span>
            <h6 className='text-white-200 text-lg font-bold'>{title}</h6>
          </div>
        </a>
      </div>
    )
  }
  
  export default ArticleBox;