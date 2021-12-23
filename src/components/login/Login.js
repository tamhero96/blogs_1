import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp, signIn } from "../../redux/actions/users";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  // sign up
  const [userCreate, setUserCreate] = useState('')
  const [passCreate, setPassCreate] = useState('')
  const handleUsernameChange = (event) => {
    setUserCreate(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassCreate(event.target.value)
  }
  const handleSignUpClick = (event) => {
    event.preventDefault()
    dispatch(signUp({userCreate,passCreate}))
    // chuyen huong sau khi click
    navigate('/')
  }
  // login
  const [userLogin, setUserLogin] = useState('')
  const [passLogin, setPassLogin] = useState('')
  const handleUsernameLogin = (event) => {
    setUserLogin(event.target.value)
  }
  const handlePasswordLogin = (event) => {
    setPassLogin(event.target.value)
  }
  const handleSignInClick = (event) => {
    event.preventDefault()
    dispatch(signIn({userCreate:userLogin,passCreate:passLogin}))
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
                  onChange={handleUsernameLogin} />
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
                  value={userCreate}
                  onChange={handleUsernameChange} 
                />
              </td>
            </tr>
            <tr>
              <td>password:</td>
              <td>
                <input 
                  type="password" 
                  value={passCreate}
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

