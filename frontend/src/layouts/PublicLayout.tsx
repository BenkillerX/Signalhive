import { Outlet } from "react-router-dom"
import Navbar from "../components/common/Navbar"

const PublicLayout = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
        
    </div>
  )
}

export default PublicLayout