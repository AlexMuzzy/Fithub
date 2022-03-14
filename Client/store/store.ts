import { configureStore } from "@reduxjs/toolkit";

import workoutsReducer from "../routine/redux/workoutSlice";

const store = configureStore({
  reducer: {
    workouts: workoutsReducer,
  },
});

export default store;
1;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;