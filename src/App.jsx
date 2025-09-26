import './App.css'
import SignUp from './Authentication/Sign up/SignUp'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignIn from './Authentication/Sing in/SignIn'
import Home from './user_panel/Homecomp/Homecomp.jsx'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path="/login" element={<SignIn/>}/>
    <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
