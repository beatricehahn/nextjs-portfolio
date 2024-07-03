import RecentProjects from "../RecentProjects"

export const SelectedContent = () => {
  return (
    <div className=" bg-black-fluid-pattern bg-cover w-screen h-auto">
      <img src="/images/purplish-gradient-bg.png" alt="" className="w-screen"/>
      <div className=''>
        <h1 className="text-white">Selected Content</h1>
      </div>
      <RecentProjects />
    </div>
  )
}
