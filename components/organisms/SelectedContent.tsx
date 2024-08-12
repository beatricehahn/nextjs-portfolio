import RecentProjects from "../RecentProjects"
import { Articles } from "../Articles"
import AboutBlock from "../AboutBlock"
import Contact from "./Contact"
import QuoteBlock from "../QuoteBlock"

export const SelectedContent = () => {
  return (
      <div className="bg-black-fluid-pattern bg-cover w-screen h-auto">
        {/* <img src="/images/purplish-gradient-bg.png" alt="" className=" z-[-1] h-auto"/> */}
        <RecentProjects />
        <Articles />
        <AboutBlock />
        <Contact />
        <QuoteBlock />
      </div>
  )
}
