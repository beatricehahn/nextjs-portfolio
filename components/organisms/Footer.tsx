import { FooterItem } from "../molecules/FooterItem"

export const Footer = () => {
  return (
    <footer className="bg-black w-full pt-20 pb-10" id="contact">
        <div>
            <FooterItem title="Menu"/>
            <FooterItem title="Social"/>
            <span className='text-white'>2024 Copyright Beatrice Hahn</span>
            <span className='text-white'>Product Designer & Developer</span>
        </div>
    </footer>
  )
}
