import { Routes,Route } from "react-router-dom"
import Home from '../components/Home'
import Blog from '../components/Blog'
import About from '../components/About'

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/:id" element={<Blog />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
    )
}