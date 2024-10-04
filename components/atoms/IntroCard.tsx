interface CardProps {
  title?: string;
  description?: string;
}

export const IntroCard = ({ title = "Title Here", description = "Description goes here"} : CardProps) => {
  return (
    <div className="p-[8px]">
        <div className="bg-blue-100 w-[48px] h-[48px] mb-4 rounded-[8px]"></div>
        <div className="">
          <h6 className="md:text-left text-purple-bright text-[16px] md:text-[14px]">{title}</h6>
          <p className="md:text-left text-[15px] md:text-[13px] pt-[0x]">{description}</p>
        </div>
    </div>
  )
}
