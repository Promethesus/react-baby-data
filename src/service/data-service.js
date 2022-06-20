import data from "../data/data.json"

export function getAllData() {

    return data.map( item => {

        return {
            type: item.Type.toLowerCase(),
            start: item.Start,
            duration: item.Duration,
            end: item.End,
            endConditions: item["End Conditions"],
            startConditions: item["Start Conditions"],
            notes: item.Note?.toLowerCase()
        };
    });
}

export function getAllSleep() {

    // magic string: "sleep"
    return getAllData().filter(item =>  item.type === "sleep");

}