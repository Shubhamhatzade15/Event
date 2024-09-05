import Event from "./Event"
import EventHero from "./EventHero"
import Navbar from "../../../component/Navbar"
import Footer from "../../../component/Footer"
import Otherevent from "./Other event/Otherevent"
export default function Home() {
  return (
    <>
       <Navbar />
       <EventHero />
       <Event />
       <Otherevent />
       <Footer />
    </>
  
  )
}
