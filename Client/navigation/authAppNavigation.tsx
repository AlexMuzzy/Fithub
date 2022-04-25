import React from "react";

import RoutinesScreen from "../screens/routinesScreen";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import LoginScreen from "../screens/loginScreen";

export type AuthStackParamList = {
  Routine: undefined;
  Login: undefined;
};

export type RoutineScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "Routine"
>;

export type LoginScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "Login"
>;

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthAppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={"Login"}>
      <Stack.Screen name="Routine" component={RoutinesScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthAppNavigation;
