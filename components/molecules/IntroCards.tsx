import { IntroCard } from "../atoms/IntroCard"

const IntroCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 mt-[24px]">
      <IntroCard />
      <IntroCard />
      <IntroCard />
      <IntroCard />
    </div>
  )
}

export default IntroCards