/** Initial sleep data exported from HuckleBerry NOT normalized */
export type HuckleBerryData = {
    Type: ("Sleep"|"Feed"|"sleep"|"feed");
    Start: string;
    End: string;
    Duration: string;
    "Start Conditions": string;
    "Start Location": string;
    "End Conditions": string;
    Notes: string;
}

/** The HuckleBerryData normalized for our app */
export type BabyData = {
    type: ("sleep"|"feed");
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    duration: string;
    durationInMinutes: number;
    startConditions: string;
    startLocation: string;
    endConditions: string;
    notes: string;
}