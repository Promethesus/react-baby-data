import React from 'react'
import { getAllData, getAllSleep } from '../service/data-service'






function Histograms() {

    const allData = getAllData()


  return (
    <>
        <h3>Sleep</h3>
        <ol>
            {getAllSleep().map(item=>(
                <li>{new Date(item.start).toLocaleDateString()} — {item.duration} </li>
            ))}
        </ol>
    </>
  )
}

export default Histograms