import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ProfileScreen from "../../screens/profileScreen";
import AppHeader from "./appHeader";

type AppBarHeaderProps = {
  isLoggedIn: boolean;
}

const AppBarHeader = ({isLoggedIn}: AppBarHeaderProps) => {
  const { colors } = useTheme();

  return (
    <Appbar.Header style={styles.appBarContent}>
      <Appbar.Content
        title={
          <AppHeader />
        }
      />

      {isLoggedIn ? (
        <Appbar.Action
          icon="account"
          onPress={() => console.log("profile")}
          style={{
            backgroundColor: colors.background,
            elevation: 15,
          }}
          color={colors.text}
          rippleColor={colors.primary}
        />
      ) : undefined}
    </Appbar.Header>
  );
};

const ScreenComponent: React.FC<{ children: JSX.Element }> = (props) => {
  return (
    <>
      <AppBarHeader isLoggedIn={false}/>
      {props.children}
      <StatusBar style="auto"></StatusBar>
    </>
  );
};

const styles = StyleSheet.create({
  appBarContent: {
    alignItems: "center",
  },
});

export default ScreenComponent;
