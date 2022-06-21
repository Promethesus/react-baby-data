import styles from "./HistogramBar.module.css"
import React from 'react'

export default function HistogramBar({ value }) {

  const percentage = value / 100;
  const barStyle = { height: `${percentage}%;`};

  return (
    <div style={barStyle}>
        
    </div>
  )
}
