import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div className="header">
        Tam notes © 2021
        <div className="menu">
          | <Link to="/">home </Link>
          {/* | <Link to="/series">series </Link>
          | <Link to="/tags/">tags </Link> */}
          | <Link to="/about/">about me</Link>
        </div>
      </div>
    )
}
  
export default Navbar
