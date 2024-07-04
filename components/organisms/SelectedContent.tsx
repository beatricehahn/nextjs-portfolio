import RecentProjects from "../RecentProjects"

export const SelectedContent = () => {
  return (
    <div className=" bg-black-fluid-pattern bg-cover w-screen h-auto">
      <img src="/images/purplish-gradient-bg.png" alt="" className="w-screen z-[-1]"/>
      <RecentProjects />
    </div>
  )
}
