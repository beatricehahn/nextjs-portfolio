import { FooterItem } from "../molecules/FooterItem"

export const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
        <div>
            <FooterItem title="Menu"/>
            <FooterItem title="Social"/>
            <span>2024 Copyright Beatrice Hahn</span>
            <span>Product Designer & Developer</span>
        </div>
    </footer>
  )
}
