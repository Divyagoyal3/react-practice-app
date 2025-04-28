import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import Search from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useRef ,useEffect} from "react";
import { logout } from "../../firebase";
const NavBar = () => {

    const  navRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                navRef.current.classList.add("navbar-dark");
            } else {
                navRef.current.classList.remove("navbar-dark");
            }
        });
    }, []);
    return (
        <div ref= {navRef} className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Netflix" className="navBar-logo" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>News & Popular</li>
                    <li>My List</li>
                    <li>Browse By Language</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={Search} alt="Netflix" className="icons" />
                <p>Children</p>
                <img src={bell_icon} alt="Netflix" className="icons" />
                <div className="navbar-profile">
                    <img src={profile_icon} alt="Netflix" className="profile" />
                    <img src={caret_icon} alt="Netflix" className="" />
                    <div className="dropdown">
                        <p onClick={()=>logout()}>Sign Out</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
