// API Configuration
export const API_ADDRESS: string = "1194-86-167-92-187.eu.ngrok.io";
export const API_PREFIX: string = "api";

export const getApiAddress = () => `https://${API_ADDRESS}/${API_PREFIX}/`;

// API EndPoints
export enum APIEndPoints {
    FETCH_WORKOUTS = "ExerciseWorkouts"
}