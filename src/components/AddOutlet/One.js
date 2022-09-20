import React from 'react'
import {Link, Outlet, useLocation} from 'react-router-dom';

const One = () => {
    const { pathname } = useLocation();
  return (
    <div>
        <div className="buttons">
        
        <Link to="/outlet/two"
        className={pathname === "/outlet/two" ? "activeBtn" : "navBtn"}>two</Link>
        <Link to="/outlet/three"
        className={pathname === "/outlet/three" ? "activeBtn" : "navBtn"}>Three</Link>
        <Link to="/outlet/four"
        className={pathname === "/outlet/four" ? "activeBtn" : "navBtn"}
        >Four</Link>
        </div>
        <Outlet />
    </div>
  )
}

export default One
