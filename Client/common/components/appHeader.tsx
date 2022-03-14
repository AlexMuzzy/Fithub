import React from "react";
import { ViewStyle, StyleSheet, StyleProp, TextStyle } from "react-native";
import { Headline, Text } from "react-native-paper";

type AppHeaderProps = {
  fitTextStyles?: TextStyle;
  hubTextStyles?: TextStyle;
  styles?: StyleProp<TextStyle>;
};

const AppHeader = ({
  fitTextStyles,
  hubTextStyles,
  styles,

}: AppHeaderProps) => {
  return (
    <Headline style={styles}>
      <Text style={{ ...fitTextStyles, ...appHeaderStyles.fitText }}>Fit</Text>
      <Text style={{ ...hubTextStyles, ...appHeaderStyles.hubText }}>Hub</Text>
    </Headline>
  );
};

const appHeaderStyles = StyleSheet.create({
  fitText: {
    fontWeight: "bold",
    color: "white"
  },
  hubText: {
    fontWeight: "100",
    color: "white"
  },
});

export default AppHeader;
