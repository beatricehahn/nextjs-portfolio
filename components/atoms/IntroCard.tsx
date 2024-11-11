interface CardProps {
  title?: string;
  description?: string;
  bgColor?: string;
}

export const IntroCard = ({ title = "Title Here", description = "Description goes here", bgColor = "bg-blue-800"} : CardProps) => {
  return (
    <div className="p-[8px]">
        {/* <div className="bg-blue-100 w-[100px] h-[100px] mb-4 rounded-[8px]"></div> */}
        <div className={`${bgColor} p-4 rounded-[16px] md:h-32 lg:h-44`}>
          <h5 className="md:text-left text-xl">{title}</h5>
          <p className="md:text-left pb-0 font-sans text-base">{description}</p>
        </div>
    </div>
  )
}
