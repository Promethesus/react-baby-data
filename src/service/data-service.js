/** @typedef {import("../types/index").BabyData} */

/** @type {Map<string, BabyData[]>} */
import data from "../data/grouped-by-date.json"

export function getAllData() {
    const allItems = [];

    for (let values of Object.values(data)) {
        allItems.push(...values);
    }

    return allItems;
}


/**
 * Parses a duration string to convert it's hours and minutes, and sums them up
 * @param {string} duration
 * @returns {Number} The sum of hours converted to minutes
 */


export function getAllSleep() {
    return getAllData().filter( item =>  item.type === "sleep" );
}

export function getAllByDate(){ 
    return data
}


//when called filters feed data by breast vs bottle
export function getAllFeedData(startLocation = undefined) {
    return getAllData()
        .filter( item =>  item.type === "feed" )
        .filter( item =>  startLocation ? item.startLocation === startLocation : item );
}




