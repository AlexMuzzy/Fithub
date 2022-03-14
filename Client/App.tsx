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
import React, { useEffect } from "react";
import { Appearance, UIManager, useColorScheme } from "react-native";
import LoginScreen from "./screens/loginScreen";

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

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default function App() {
  const colorScheme = Appearance.getColorScheme();
  const deviceColourScheme = useColorScheme();
  const deviceTheme =
    deviceColourScheme === "light" ? CombinedDefaultTheme : CombinedDarkTheme;

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={deviceTheme}>
        <NavigationContainer theme={deviceTheme}>
          <LoginScreen/>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
