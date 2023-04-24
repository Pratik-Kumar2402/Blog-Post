import { Link } from "react-router-dom";
import "./topBar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "https://blog-post-44he.onrender.com/api/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (
        <div className='top'>
            <div className="topLeft">
                <a href="https://www.facebook.com/"><i className="topIcon fa-brands fa-facebook"></i></a>
                <a href="https://www.twitter.com/"><i className="topIcon fa-brands fa-twitter"></i></a>
                <a href="https://www.pinterest.com/"><i className="topIcon fa-brands fa-pinterest"></i></a>
                <a href="https://www.instagram.com/"><i className="topIcon fa-brands fa-instagram"></i></a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/write">WRTIE</Link></li>
                    <li className="topListItem" onClick={handleLogout}>{user && 'LOGOUT'}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/settings">
                        <img className="topImg" src={PF + user.profilePic} alt="" />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>)}
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
