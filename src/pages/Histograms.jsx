import React, { useState } from 'react'
import { getAllSleep, getAllByDate, getAllFeedData } from '../service/data-service';
import Histogram from "../components/charts/Histogram";
import styles from "./Histograms.module.scss"


const sleepSelections = {
    "Sleep Data": () => getAllSleep(),
    "none": () => []
};

const feedSelections = {
    "Breast Feeding Data": () => getAllFeedData("breast"),
    "Bottle Feeding Data": () => getAllFeedData("bottle"),

};

function Histograms() {

    // need to finish breast feeding data/ bottle on service to rendering correct data
    const [sleepSelection, setSleepSelection] = useState(Object.keys(sleepSelections)[0]);
    const [feedSelection, setFeedSelection] = useState(Object.keys(feedSelections)[0]);

    const hasSleepData = sleepSelections[sleepSelection] || false;
    const selectedSleepData = hasSleepData ? sleepSelections[sleepSelection]() : null;

    const hasFeedData = feedSelections[feedSelection] || false;
    const selectedFeedData = hasFeedData ? feedSelections[feedSelection]() : null;



    return (
        <div>
            <Histogram title={sleepSelection} data={selectedSleepData}>
                <select onChange={(e) => setSleepSelection(e.target.value)}>
                    {Object.keys(sleepSelections).map(key =>
                        <option key={key} value={key}>{key}</option>
                    )}
                </select>

            </Histogram>




            <Histogram title={feedSelection} data={selectedFeedData}>
                <select onChange={(e) => setFeedSelection(e.target.value)}>
                    {Object.keys(feedSelections).map(key =>
                        <option key={key} value={key}>{key}</option>
                    )}
                </select>
            </Histogram>

        </div>
    );
}

export default Histograms