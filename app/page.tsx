import Header from "@/app/components/Header";
import AboutMe from "@/app/components/AboutMe";
import Skills from "@/app/components/Skills";

export default function HomePage() {
  return (
    <div className="w-full h-full justify-center ">
        <Header/>
        <AboutMe/>
        <Skills/>
    </div>
  )
}
