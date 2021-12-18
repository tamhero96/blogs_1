import { Routes,Route } from "react-router-dom"
import Home from '../components/Home/Home'
import Blog from '../components/Blog/Blog'
import About from '../components/About/About'

export const Router = () => {
    return (
        <Routes className="main">
            <Route path="/" element={<Home />}/>
            <Route path="/blog/:id" element={<Blog />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
    )
}