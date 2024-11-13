import { IntroCard } from "../atoms/IntroCard"

const IntroCards = () => {
  return (
    <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
      <IntroCard title="Tools-agnostic Developer:" description="With a modular approach to coding" bgColor="bg-blue-100"/>
      <IntroCard title="Data-driven UI/UX Designer:" description="Mindful of balancing business and user needs" bgColor="bg-blue-100"/>
      <IntroCard title="Adaptable Project Manager:" description="Monitoring progress above and hunting hidden risks below" bgColor="bg-blue-100"/>
      <IntroCard title="Enthusiastic Collaborator:" description="Ready to integrate my ideas with team solutions" bgColor="bg-blue-100"/>
    </div>
  )
}

export default IntroCards