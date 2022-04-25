import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { convertJSONToArrays } from "../../common/commonUtils";
import { APIEndPoints, getApiAddress } from "../../common/configuration";
import { EditWorkout, Workout } from "./workout";

export const fetchExerciseWorkouts = createAsyncThunk(
  "workouts/fetchWorkouts",
  async () => {
    const response: Response = await fetch(getApiAddress() + APIEndPoints.FETCH_WORKOUTS);
    return await response.json();
  }
);

type WorkoutState = {
  workouts: Workout[];
  loading: boolean;
  error: boolean;
}

const initialState: WorkoutState = {
  workouts: [],
  loading: false,
  error: false
};

const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    addWorkout(state, action) {
      state.workouts.push(action.payload);
    },
    removeWorkout(state, action) {
      state.workouts.filter(
        (workout: Workout) => workout.workoutId !== action.payload
      );
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(
        fetchExerciseWorkouts.fulfilled,
        (state, action) => {
          return {
            ...state,
            workouts: action.payload
          }
        }
      )
      .addCase(
        fetchExerciseWorkouts.pending,
        (state, action) => {
          return {
            ...state,
            loading: true
          }
        }
      )
      .addCase(
        fetchExerciseWorkouts.rejected,
        (state, action) => {
          return {
            ...state,
            error: true
          }
        }
      )
  },
});

export const { addWorkout, removeWorkout } = workoutsSlice.actions;
export default workoutsSlice.reducer;
