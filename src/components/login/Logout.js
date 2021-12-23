import { useDispatch } from 'react-redux'
import {signOut} from '../../redux/actions/users'
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogOutClick = (event) => {
    event.preventDefault()
    dispatch(signOut())
    navigate('/login')
  }
  return (
    <div>
      <button onClick={handleLogOutClick}>Log Out</button>
    </div>
  )
}

export default Logout;
