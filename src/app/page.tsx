import Navigation from "@/components/Navigation"
import Introduction from "@/components/Introduction"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="h-screen">
        <Introduction />
      </main>
      <Footer />
    </>
  )
}
