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
import UsersLayout from "./layouts/UsersLayout"
import ComingSoon from "./components/ComingSoon"
import UserComingSoon from "./components/UserComingSoon"

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
        <Route element={<UsersLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/markets" element={<UserComingSoon />} />
            <Route path="/signals" element={<UserComingSoon />} />
            <Route path="/portfolio" element={<UserComingSoon />} />
            <Route path="/wallet" element={<UserComingSoon />} />
            <Route path="/trade-history" element={<UserComingSoon />} />
      </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/verify-email" element={<VerifyEmail/>}/>
        <Route path='/coming-soon' element={<ComingSoon/>}/>
   </Routes>
    
    </>
  )
}

export default App
