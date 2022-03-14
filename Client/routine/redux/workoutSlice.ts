import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditWorkout, ExerciseSet, Workout } from "./workout";

const initialState: Workout[] = [];

const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    addWorkout(state, action: PayloadAction<Workout>) {
      state.push(action.payload);
    },
    removeWorkout(state, action: PayloadAction<number>) {
      state.filter((workout: Workout) => workout.id !== action.payload);
    },
    setWorkouts(state, action: PayloadAction<Workout[]>) {
      return state = action.payload;
    },
    setExerciseSet(state, action: PayloadAction<EditWorkout>) {
      return {
        ...state,
        exercises: state.map
      }
    }
  },
});

export const { addWorkout, removeWorkout, setWorkouts } = workoutsSlice.actions;
export default workoutsSlice.reducer;
