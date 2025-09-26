import './App.css'
import SignUp from './Authentication/Sign up/SignUp'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignIn from './Authentication/Sing in/SignIn'
<<<<<<< HEAD
import Home from './user_panel/Home/home'
// import Home from './user_panel/Home/home'/
Home
=======
import Home from './user_panel/Home/Home.jsx'
>>>>>>> c4825d0a5f63a4d461eef6fc3d6c297c0f56efda
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
