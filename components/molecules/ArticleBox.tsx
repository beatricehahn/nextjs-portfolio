const ArticleBox = (
    { id, genre, date, title, link} : { id: number, genre : string, date: string, title : string, link: string }
  ) => {
    return (
      <div key={id} className="flex w-full">
        <a className="border-2 mb-4 rounded-[16px] w-full flex" href={link}>
          <div className="mx-4 my-4 w-[100px] h-[90px] bg-blue-100 rounded-[12px]"></div>
          <div className="mx-2 my-4">
            <span className="text-[12px] mb-2 mr-2">{date}</span>
            <span className="text-[12px]">&#183;</span>
            <h6 className="inline text-[12px] ml-2 text-purple-bright" >{genre}</h6>
            <h5 className=''>{title}</h5>
          </div>
        </a>
      </div>
    )
  }
  
  export default ArticleBox;