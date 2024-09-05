import Event from "./Event Location/Event"
import EventHero from "./Event hero/EventHero"
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
