import React from 'react'
// import './Navbar-styles.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to={"/histograms"}>Histograms</Link>
        <Link to={"/"}> PageTwo</Link>
        <Link to={"/"}> PageThree</Link>
        <Link to={"/"}> PageFour</Link>
    </div>
  )
}
