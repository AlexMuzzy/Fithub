import * as React from "react";
import { ActivityIndicator, Colors, useTheme } from "react-native-paper";

const AppActivityIndicator = () => {
  const theme = useTheme();

  return <ActivityIndicator animating={true} color={theme.colors.primary} />;
};

export default AppActivityIndicator;
