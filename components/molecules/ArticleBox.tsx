const ArticleBox = (
    { id, genre, date, title} : { id: number, genre : string, date: string, title : string }
  ) => {
    return (
      <div key={id} className=" flex flex-col md:flex-row md:items-start md:justify-between items-center">
        <div className="">
            {/* <img 
              src={img}
              alt='Project Picture'
              className="rounded-[24px]"
            /> */}
            <div className="rounded-[24px] bg-hero w-full h-[268px]"></div>
            <div className="m-2 mix-blend-difference">
              <span className="text-[14px] mb-1 text-white-200">{date}</span>
              <h6 className='text-white-200 text-lg font-bold mb-2'>{title}</h6>
            </div>
        </div>
      </div>
    )
  }
  
  export default ArticleBox;