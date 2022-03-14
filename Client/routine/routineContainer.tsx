import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { FAB, useTheme } from "react-native-paper";
import { useSelector } from "react-redux";

import { RootState } from "../store/store";
import { Workout } from "./redux/workout";
import RoutineList from "./routineList";

const RoutineContainer = () => {
  const workouts = useSelector((state: RootState) => state.workouts);
  const {colors} = useTheme();

  return (
    <>
      <ScrollView style={styles.workoutListContainer}>
        {workouts.map((workout: Workout) => (
          <RoutineList key={workout.id} workout={workout} />
        ))}
      </ScrollView>

      <FAB
        style={{...styles.fab, backgroundColor: colors.surface}}
        icon="plus"
        onPress={() => console.log("Pressed")}
        color={colors.text}
      />
    </>
  );
};

const styles = StyleSheet.create({
  workoutListContainer: {
    flex: 1,
  },

  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default RoutineContainer;
