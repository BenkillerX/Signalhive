import { Route, Routes} from "react-router-dom"
import PublicLayout from "./layouts/PublicLayout"
import LandingPage from "./components/landing/LandingPage"
import ExplorePage from "./components/landing/ExplorePage"
import HowItWorks from "./components/landing/HowItWorks"
import FAQ from "./components/landing/FAQ"
import LiveSignals from "./components/landing/LiveSignals"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Dashboard from "./pages/user/Dashboard"
import VerifyEmail from "./pages/auth/VerifyEmail"

function App() {

  return (
    <>
   <Routes>
       {/* Public Pages Routes */}
        <Route element={<PublicLayout/>}>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/explore" element={<ExplorePage/>}/>
          <Route path="/How-it-works" element={<HowItWorks/>}/>
          <Route path="/FAQ" element={<FAQ/>}/>
          <Route path="/live-signals" element={<LiveSignals/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/verify-email" element={<VerifyEmail/>}/>
   </Routes>
    
    </>
  )
}

export default App
