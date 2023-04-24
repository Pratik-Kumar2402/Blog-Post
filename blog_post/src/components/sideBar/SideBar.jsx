import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './sideBar.css'

export default function SideBar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
          const res = await axios.get("https://blog-post-44he.onrender.com/api/categories");
          setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <div className='sideBar'>
            <div className='sideBarItem'>
                <span className='sideBarTitle'>
                    ABOUT ME
                </span>
                <img className='sideBarImg' src={require('../image/profile.webp')} alt='' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, enim? Sed laboriosam provident alias iste perferendis nisi, debitis nihil?</p>
            </div>
            <div className='sideBarItem'>
                <span className='sideBarTitle'>
                    CATEGORIES
                </span>
                <ul className='sideBarList'>
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sideBarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='sideBarItem'>
                <span className='sideBarTitle'>
                    FOLLOW US
                </span>
                <div className='sideBarSocial'>
                    <a href="https://www.facebook.com/"><i className="sideBarIcon fa-brands fa-facebook"></i></a>
                    <a href="https://www.twitter.com/"><i className="sideBarIcon fa-brands fa-twitter"></i></a>
                    <a href="https://www.pinterest.com/"><i className="sideBarIcon fa-brands fa-pinterest"></i></a>
                    <a href="https://www.instagram.com/"><i className="sideBarIcon fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}
