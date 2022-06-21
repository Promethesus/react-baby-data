import data from "../data/data.json"

export function getAllData() {

    return data.map( item => {

        return {
            /** @type {"sleep"|"feed"} */
            type: item.Type.toLowerCase(),
            start: item.Start,
            duration: item.Duration,
            end: item.End,
            startLocation: item["Start Location"],
            endConditions: item["End Conditions"],
            startConditions: item["Start Conditions"],
            notes: item.Note?.toLowerCase()
        };
    });
}

// function translateTime(duration) {
//     const partsDuration = duration.split(":")
//     const convertedDuration = parseInt(partsDuration[0]) * 60 + parseInt(partsDuration[1])
//     return convertedDuration;
// }


/**
 * Parses a duration string to convert it's hours and minutes, and sums them up
 * @param {string} duration
 * @returns {Number} The sum of hours converted to minutes
 */
function parseDurationToMinutes(duration) {

    const [hours, minutes] = duration
        .split(":")
        .map( part => parseInt(part, 10));

    return (hours * 60) + minutes;
}

export function getAllSleep() {
    
    return getAllData()
        .filter( item =>  item.type === "sleep" )
        .map( item => {

            // calculate duration in minutes
            const durationInMinutes = parseDurationToMinutes(item.duration);

            return {
                ...item,
                durationInMinutes,

            }
        });
}

// class Sleep {

// }


// // msdn Generic Type
// class Routine<T> {
//     constructor(innerClass: T) {
//         this.innerClass = innerClass;
//     }
//     go() {
//         if (typeof this.innerClass === Sleep) {
//             this.innerClass.rest();
//         }
//     }
// }


// new Routine(class Sleep {});