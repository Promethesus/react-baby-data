import React from 'react'
import styles from "./Histogram.module.css";
import { getAllSleep } from '../service/data-service'
import HistogramBar from "../components/charts/HistogramBar"


function Histograms() {

    const sleepData = getAllSleep();
    return (
        <div className={styles.histogram_container}>
            <h3 className={styles.H3}>Sleep hi</h3>
            <div className={styles.histogram}>
                {sleepData.map(item => (
                    <div>
                        <HistogramBar value={20} />
                        <div>
                            {new Date(item.start).toLocaleDateString()} — {item.duration}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Histograms