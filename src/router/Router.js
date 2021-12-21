import { Routes,Route } from "react-router-dom"
import Home from '../components/Home/Home'
import Blog from '../components/Blog/Blog'
import About from '../components/About/About'
import Login from '../components/login/Login'
import Forgot from '../components/login/Forgot'
import User from '../components/User/User'

export const Router = () => {
    return (
        <Routes className="main">
            <Route path="/" element={<Home />}/>
            <Route path="/blog/:id" element={<Blog />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/forgot" element={<Forgot />}/>
            <Route path="/user/:id" element={<User />}/>
        </Routes>
    )
}