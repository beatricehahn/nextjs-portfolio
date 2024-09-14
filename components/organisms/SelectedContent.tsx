import RecentProjects from "../RecentProjects"
import { Articles } from "../Articles"
import AboutBlock from "../AboutBlock"
import Contact from "./Contact"
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
