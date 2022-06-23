import React from 'react'
import { getAllSleep } from '../service/data-service';
import Histogram from "../components/charts/Histogram";

// set up state with key value pairs for title and 
// data being the different "views" of data 

function Histograms() {

    const sleepData = getAllSleep();

    return (
        <Histogram title={"All Data"} data={sleepData} />
    );
}

export default Histograms