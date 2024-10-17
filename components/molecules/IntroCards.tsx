import { IntroCard } from "../atoms/IntroCard"

const IntroCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-4 mt-[24px]">
      <IntroCard title="Developer" description=" with a tools-agnostic learning mindset and a modular approach to UI" />
      <IntroCard title="UI/UX Designer" description="inspired by diverse disciplines and empathetic to varied perspectives."  />
      <IntroCard title="Project Manager" description="leading with a bird’s eye and ground-level view for details." />
      <IntroCard title="Collaborator" description="skilled in mediation, clear communication, and building rapport with teams, clients, and stakeholders." />
    </div>
  )
}

export default IntroCards