import styles from "./HistogramBar.module.css"
import React from 'react'

export default function HistogramBar({ value }) {

  const percentage = (value/1440) *100;
  const barStyle = { height: `${percentage}%`};

  return (
    <div className={styles.histogram_bar} style={barStyle}>
    </div>
  )
}
 