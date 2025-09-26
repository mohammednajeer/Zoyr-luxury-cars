import './SignIn.css'
import usericon from '../../assets/profile.png'
import passwordicon from '../../assets/padlock.png'
import logo from '../../assets/Screenshot 2025-09-21 153022.png'   // safer: rename file without spaces
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignIn() {
  const [user, setuser] = useState("")
  const [password, setpassword] = useState("")
  let [error, setError] = useState({})
  let nav = useNavigate()

  async function handleSubmit() {
    let newError = {}
    if (user.trim() === "") newError.name = "Please enter the name"
    if (password.trim() === "") newError.password = "Please enter the password"

    if (Object.keys(newError).length === 0) {
      try {
        // Check if user exists in JSON server
        let res = await axios.get(
          `http://localhost:4000/Users?username=${user}&password=${password}`
        )

        if (res.data.length > 0) {
          alert("Login successful ✅")
          nav("/") // redirect to home page
        } else {
          alert("Invalid username or password ❌")
        }
      } catch (err) {
        console.error("Login error:", err)
        alert("Server error, try again later ❌")
      }
    }

    setError(newError)
  }

  return (
    <div className='maind'>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className='container'>
        <div className="header">
          <div className="text">Sign In</div>
          <div className='underline'></div>
        </div>

        <div className="inputs">
          {/* Username */}
          <div className="input">
            <img src={usericon} alt="User icon" />
            <input
              type="text"
              placeholder="Username"
              value={user}
              onChange={(e) => setuser(e.target.value)}
            />
          </div>
          {error.name && <p className='errortext'>{error.name}</p>}

          {/* Password */}
          <div className="input">
            <img src={passwordicon} alt="Password icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setpassword(e.target.value)}
            />
          </div>
          {error.password && <p className='errortext'>{error.password}</p>}

          {/* Submit Button */}
          <div className='submit-container'>
            <button className='submit' onClick={handleSubmit}>Sign In</button>
          </div>

          <div className='guidtosign'>
            <p>Don't have an account?  
              <span onClick={() => nav("/")} className='navigateLink'> SignUp here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn 