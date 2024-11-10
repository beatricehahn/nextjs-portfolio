import { IntroCard } from "../atoms/IntroCard"

const IntroCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-4 mt-[24px]">
      <IntroCard title="Tools-agnostic Developer:" description="with a modular approach to coding" />
      <IntroCard title="Data-driven UI/UX Designer:" description="mindful of balancing business and user needs" />
      <IntroCard title="Adaptable Project Manager:" description="Monitoring progress above and hunting hidden risks below" />
      <IntroCard title="Enthusiastic Collaborator:" description="ready to integrate my ideas with team solutions" />
    </div>
  )
}

export default IntroCards