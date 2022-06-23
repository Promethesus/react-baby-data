import styles from "./Histogram.module.css";
import HistogramBar from "./HistogramBar";

export default function Histogram({ title, data, }) {
    return (
        <div className={styles.histogram_container}>
            <h3 className={styles.title}>{title}</h3>

            <div className={styles.histogram}>
                {data.map((item, index) => (
                    <div key={index} className={styles.histogram_item}>
                        <HistogramBar value={item.durationInMinutes} />
                        <div className={styles.histogram_item_tooltip}>
                            {new Date(item.startDate).toLocaleDateString()} <br />
                            <i>{item.duration}</i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}