import RecentProjects from "../molecules/RecentProjects"
import { Articles } from "./Articles"
//import AboutBlock from "../AboutBlock"
import Contact from "../organisms/Contact"
import QuoteBlock from "../QuoteBlock"

export const SelectedContent = () => {
  return (
      <div className="flex-col justify-center">
        <RecentProjects />
        <Articles />
        <QuoteBlock />
        <Contact />
      </div>
  )
}
