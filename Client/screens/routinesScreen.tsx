import React, { useEffect, useState } from "react";
import { View, StyleSheet, LayoutAnimation } from "react-native";

import BaseAppComponent from "../common/components/baseAppComponent";
import RoutineContainer from "../routine/routineContainer";
import { useAppDispatch } from "../store/storeHooks";
import { fetchExerciseWorkouts } from "../routine/redux/workoutSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import AppActivityIndicator from "../common/components/appActivityIndicator";
import { Workout } from "../routine/redux/workout";

const RoutinesScreen = () => {
  const dispatch = useAppDispatch();
  const workoutState = useSelector((state: RootState) => state.workouts);
  const workouts: Workout[] = workoutState.workouts;

  LayoutAnimation.easeInEaseOut();

  useEffect(() => {
    if (!workoutState.loading) {
      dispatch(fetchExerciseWorkouts());
    }
  }, [dispatch]);

  return (
    <BaseAppComponent>
      <View style={styles.container}>
        {workouts.length ? (
          <RoutineContainer workouts={workouts}  />
        ) : (
          <AppActivityIndicator />
        )}
      </View>
    </BaseAppComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RoutinesScreen;
