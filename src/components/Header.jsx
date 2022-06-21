import React from 'react'
import data from "../data/data.json"
import { Link } from "react-router-dom";

function Header() {
    console.log(data)
  return (
    <div>
      this is the header
      <Link to={"/histograms"}>Histograms</Link>
    </div>
  )
}

export default Header