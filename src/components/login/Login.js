import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp, signIn } from "../../redux/actions/users";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  // sign up
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const handleusernameChange = (event) => {
    setusername(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setpassword(event.target.value)
  }
  const handleSignUpClick = (event) => {
    event.preventDefault()
    dispatch(signUp({username,password}))
    // chuyen huong sau khi click
    navigate('/')
  }
  // login
  const [userLogin, setUserLogin] = useState('')
  const [passLogin, setPassLogin] = useState('')
  const handleusernameLogin = (event) => {
    setUserLogin(event.target.value)
  }
  const handlePasswordLogin = (event) => {
    setPassLogin(event.target.value)
  }
  const handleSignInClick = (event) => {
    event.preventDefault()
    dispatch(signIn({username:userLogin,password:passLogin}))
    // chuyen huong sau khi click
    navigate('/')
  }
  
  return (
    <div>
      <b>Login</b>
      <form>
        <table>
          <tbody>
            <tr>
              <td>username:</td>
              <td>
                <input 
                  type="text" 
                  value={userLogin}
                  onChange={handleusernameLogin} />
              </td>
            </tr>
            <tr>
              <td>password:</td>
              <td>
                <input 
                  type="password" 
                  value={passLogin}
                  onChange={handlePasswordLogin} />
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={handleSignInClick}>login</button>
      </form>
      <Link to="/forgot">Forgot your password?</Link>
      <br />
      <b>Create Account</b>
      <form>
        <table>
          <tbody>
            <tr>
              <td>username:</td>
              <td>
                <input 
                  type="text" 
                  value={username}
                  onChange={handleusernameChange} 
                />
              </td>
            </tr>
            <tr>
              <td>password:</td>
              <td>
                <input 
                  type="password" 
                  value={password}
                  onChange={handlePasswordChange} 
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={handleSignUpClick}>create account</button>
      </form>
    </div>
  )
}

export default Login;

