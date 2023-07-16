import Navigation from "@/components/Navigation"
import Introduction from "@/components/Introduction"
import Overview from "@/components/Overview"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="">
        <Introduction />
        <Overview />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
