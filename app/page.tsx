import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
