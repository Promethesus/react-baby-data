import { cwd } from 'node:process';
import { readFileSync, writeFileSync } from 'node:fs';

const data = readFileSync('./src/data/normalized-data.json').toString();

/** @type {import("../src/types/index").BabyData[]} */
const babyData = JSON.parse(data);
const groupedByDate = groupByDate(babyData);
const writableGroupByDate = Object.fromEntries(groupedByDate.entries())
writeFileSync('./src/data/grouped-by-date.json', JSON.stringify(writableGroupByDate, { space: "2"}));


/**
 * @param {BabyData[]} babyData
 * @returns {Map<string, BabyData[]}
 */
function groupByDate(babyData) {

    /** @type {Map<string, BabyData[]} */
    const byDate = new Map();

    for (let i = 0; i < babyData.length; i++) {
        const item = babyData[i];

        const key = item.startDate;

        if (byDate.has(key)) {
            const values = byDate.get(key);
            byDate.set(key, [...values, item]);
        }
        else {
            // create the mapping with the current item
            byDate.set(key, [ item, ]);
        }  
    }
    return byDate
} 