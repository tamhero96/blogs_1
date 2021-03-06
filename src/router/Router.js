import { Routes,Route } from "react-router-dom"
import Home from '../components/Home/Home'
import Blog from '../components/Blog/Blog'
import About from '../components/About/About'
import Login from '../components/login/Login'
import Forgot from '../components/login/Forgot'
import User from '../components/User/User'
import Logout from '../components/login/Logout'

import Submit from '../components/Submit/Submit'
import { PublicRoute } from "./PublicRoute"
import { PrivateRoute } from "./PrivateRoute"
import EditProfile from '../components/User/EditProfile'


export const Router = () => {
    return (
        <Routes className="main">
            <Route path="/" element={<Home />}/>
            <Route path="/blog/:id" element={<Blog />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/login" element={
                <PublicRoute>
                    <Login />
                </PublicRoute>
            }/>
            <Route path="/forgot" element={<Forgot />}/>
            <Route path="/user/:username" element={<User />}/>
            <Route path="/submit" element={
                <PrivateRoute >
                    <Submit />
                </PrivateRoute>
            }/>
            <Route path="/logout" element={
                <Logout />
            }/>
            <Route path="/user/edit/:username" element={
                <PrivateRoute >
                    <EditProfile />
                </PrivateRoute>
            }/>
        </Routes>
    )
}