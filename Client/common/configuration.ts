// API Configuration
export const API_ADDRESS: string = "https://5d43-109-156-52-14.eu.ngrok.io/";
export const API_PREFIX: string = "api";

export const getApiAddress = () => `https://${API_ADDRESS}/${API_PREFIX}/`;

// API EndPoints
export enum APIEndPoints {
    FETCH_WORKOUTS = "exerciseWorkouts",
    FETCH_GROUPS = "exerciseGroups",
    FETCH_SETS = "exerciseSets"
}