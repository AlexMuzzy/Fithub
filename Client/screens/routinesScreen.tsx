import React from "react";
import { View, StyleSheet } from "react-native";

import ScreenComponent from "../common/components/screenComponent";
import RoutineContainer from "../routine/routineContainer";
import { setWorkouts } from "../routine/redux/workoutSlice";
import jsonData from "../appdata.json";
import { useAppDispatch } from "../store/storeHooks";

const RoutinesScreen = () => {
  const dispatch = useAppDispatch();
  dispatch(setWorkouts(jsonData));

  return (
    <ScreenComponent>
      <View style={styles.container}>
        <RoutineContainer />
      </View>
    </ScreenComponent>
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
