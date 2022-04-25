import React from "react";
import { View, StyleSheet } from "react-native";

import BaseAppComponent from "../common/components/baseAppComponent";
import RoutineContainer from "../routine/routineContainer";
import { setWorkouts } from "../routine/redux/workoutSlice";
import jsonData from "../appdata.json";
import { useAppDispatch } from "../store/storeHooks";

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  dispatch(setWorkouts(jsonData));

  return (
    <BaseAppComponent>
      <View style={styles.container}>
        <RoutineContainer />
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

export default ProfileScreen;
