import { cwd } from 'node:process';
import { readFileSync, writeFileSync } from 'node:fs';
console.log(`current directory: ${cwd()}`);
const data = readFileSync('./src/data/data.json').toString();

/** 
 * @typedef {Object} SleepData
 * @property {string} Type
 * @property {string} Start
 * @property {string} End
 * @property {string} Duration
 * @property {string} "Start Conditions"
 * @property {string} "Start Location"
 * @property {string} "End Conditions"
 * @property {string} Notes
 */

/** @type {SleepData[]} */
const groupedByDate = groupByDate(JSON.parse(data));
const writableGroupByDate = Object.fromEntries(groupedByDate.entries())
writeFileSync('./src/data/grouped-by-date.json', JSON.stringify(writableGroupByDate))


function groupByDate(jsonData) {
    /** @type {Map<string, SleepData[]} */
    const byDate = new Map();

    for (let i = 0; i < jsonData.length; i++) {
        const item = jsonData[i];
        const [date, time] = item.Start.split(" ");
        const key = date;
        
        const itemClone = {
            ...item,
            Date: date,
            Time: time,
        };

        if (byDate.has(key)) {
            const values = byDate.get(key);
            byDate.set(key, [...values, itemClone]);
        }
        else {
            // create the mapping with the current item
            byDate.set(date, [ itemClone, ]);
        }  
    }
    return byDate
} 