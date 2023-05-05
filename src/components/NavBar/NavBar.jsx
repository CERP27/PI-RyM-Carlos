
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css'
import {Link } from "react-router-dom";

const NavBar = ({onSearch,logout})=>{
    const {pathname} =useLocation()
    return (
        <div className={style.nav}>
            <div>
            <Link to="/home">
                <button className={style.submit}><span>HOME</span></button>
            </Link>
            </div>

            <div>
            {pathname==='/home' ? <SearchBar onSearch={onSearch}/> : ''}
            </div>
            
            <div>
            <Link to="/about">
                <button className={style.submit}><span>ABOUT</span></button>
            </Link>
            </div>

            <div>
                <button className={style.submit} onClick={logout}><span>LogOut</span></button>
            </div>

        </div>
    )
}

export default NavBar;