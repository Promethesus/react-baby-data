/** @typedef {import("../types/index").BabyData} */

/** @type {Map<string, BabyData[]>} */
import data from "../data/grouped-by-date.json"

export function getAllData() {
    const allItems = [];

    for (let values in Object.values(data)) {
        allItems.push(...values);
    }

    return data;
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