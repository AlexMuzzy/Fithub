import {
  DefaultTheme,
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";

import { Provider as StoreProvider } from "react-redux";
import BaseAppNavigation from "./navigation/baseAppNavigation";
import store from "./store/store";

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import React, { useState } from "react";
import { Appearance, Platform, UIManager, useColorScheme } from "react-native";
import LoginScreen from "./screens/loginScreen";
import RoutinesScreen from "./screens/routinesScreen";
import AuthAppNavigation from "./navigation/authAppNavigation";

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  const colorScheme = Appearance.getColorScheme();
  const deviceColourScheme = useColorScheme();
  const deviceTheme =
    deviceColourScheme === "light" ? CombinedDefaultTheme : CombinedDarkTheme;

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={deviceTheme}>
        <NavigationContainer theme={deviceTheme}>
          {userLoggedIn ? <BaseAppNavigation /> : <AuthAppNavigation />}
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
