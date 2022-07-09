import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import BaseAppComponent from "../common/components/baseAppComponent";
import {
  Headline,
  List,
  Subheading,
  Text,
  Title,
  useTheme,
} from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import { useSelector } from "react-redux";
import { Workout } from "../routine/redux/workout";
import { fetchExerciseWorkouts } from "../routine/redux/workoutSlice";
import { RootState } from "../store/store";

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const workoutState = useSelector((state: RootState) => state.workouts);
  const workouts: Workout[] = workoutState.workouts;
  const { colors } = useTheme();

  const benchPressWeights = workouts
    .map((workout) =>
      workout.groups
        .filter((group) => group.name === "Bench Press")
        .map((group) => group.sets.map((set) => set.weight))
    )
    .flat(2);

  const squatWeights = workouts
    .map((workout) =>
      workout.groups
        .filter((group) => group.name === "Bench Press")
        .map((group) => group.sets.map((set) => set.weight))
    )
    .flat(2);

  const deadliftWeights = workouts
    .map((workout) =>
      workout.groups
        .filter((group) => group.name === "Bench Press")
        .map((group) => group.sets.map((set) => set.weight))
    )
    .flat(2);

  useEffect(() => {
    if (!workoutState.loading) {
      dispatch(fetchExerciseWorkouts());
    }
  }, [dispatch]);

  return (
    <BaseAppComponent>
      <View>
        <Headline style={{ padding: 20 }}>Bench Press Total</Headline>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width * 0.9} // from react-native
          height={Dimensions.get("window").height * 0.3}
          yAxisSuffix="Kg"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: colors.background,
            backgroundGradientFrom: colors.primary,
            backgroundGradientTo: colors.accent,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            alignSelf: "center",
          }}
        />
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
