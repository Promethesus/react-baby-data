import { cwd } from 'node:process';
import { readFileSync, writeFileSync } from 'node:fs';

const data = readFileSync('./src/data/data.json').toString();

/** @type {import("../src/types/index").HuckleBerryData[]} */
const jsonData = JSON.parse(data);
const normalizedData = normalizeData(jsonData);

writeFileSync('./src/data/normalized-data.json', JSON.stringify(normalizedData, { space: "2" }));


/**
 * 
 * @param {HuckleBerryData[]} jsonData
 * @returns {import("../src/types/index").SleepData[]}
 */
function normalizeData(jsonData) {

    return jsonData.map(item => {
        const [startDate, startTime] = item.Start.split(" ").map(replaceEmptyStringWithNull);
        const [endDate, endTime] = item.End.split(" ").map(replaceEmptyStringWithNull);
        const durationInMinutes = parseDurationToMinutes(item.Duration)

        return {
            type: item.Type.toLowerCase(),
            startDate,
            startTime,
            endDate,
            endTime,
            duration: replaceEmptyStringWithNull(item.Duration),
            durationInMinutes: isNaN(durationInMinutes) ? null : durationInMinutes,
            startLocation: replaceEmptyStringWithNull(item["Start Location"]),
            endConditions: replaceEmptyStringWithNull(item["End Conditions"]),
            startConditions: replaceEmptyStringWithNull(item["Start Conditions"]),
            notes: replaceEmptyStringWithNull(item.Notes.toLowerCase()),
        };
    });
} 

function parseDurationToMinutes(duration) {

    const [hours, minutes] = duration
        .split(":")
        .map( part => parseInt(part, 10));

    return (hours * 60) + minutes;
}



function replaceEmptyStringWithNull(value) {
    return typeof value === "string" && value ? value : null;
}