import Header from "./extras/Header/Header"
import News from "./extras/News/News"
import Sidebar from "../../components/sidebar/Sidebar"
import "./blog.css"

export default function Home() {
  return (
    <><Header/>
    <div className="Home">
        <News />
        <Sidebar />
    </div></>
  )
}