import { Link } from "react-router-dom";
function Navbar() {
    return (
      <div>
        <div>Tam notes © 2021</div>
        <div>
          | <Link to="/">home </Link>
          {/* | <Link to="/series">series </Link>
          | <Link to="/tags/">tags </Link> */}
          | <Link to="/about/">about me</Link>
          | <Link to="/login/">login</Link>
        </div>
      </div>
    )
}
  
export default Navbar

