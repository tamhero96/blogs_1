import {Navigate } from "react-router"

export const PrivateRoute = ({children}) => {
    // kiem tra co token ko // kiem tra co tai khoan dang nhap khong
    if(localStorage.getItem('USER-TOKEN')){
        return children;
    }else{
        return <Navigate to='/login' />
    }
}

