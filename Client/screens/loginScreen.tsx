import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import {
  Button,
  TextInput,
  useTheme,
  Text,
  Headline,
  Subheading,
  Title,
  Checkbox,
  Caption,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../common/components/appHeader";
import ScreenComponent from "../common/components/screenComponent";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [rememberAccount, setRememberAccount] = useState(false);

  const { colors } = useTheme();

  // Styles declared inside component to use theme hook.
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    topLevelView: {
      flex: 0.8,
      backgroundColor: colors.accent,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      elevation: 15,
      justifyContent: "center",
      alignItems: "center",
      fontSize: 25,
    },
    bottomLevelView: {
      flex: 2,
      margin: 20,
    },
  });

  return (
    <ScreenComponent>
      <SafeAreaView style={styles.container}>
        <View style={styles.topLevelView}>
          <Title style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>
              Welcome to <AppHeader />
            </Text>
          </Title>
        </View>

        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.bottomLevelView}>
          <Headline style={{ flex: 0.15 }}>
            <Text>Login</Text>
          </Headline>

          <View style={{ flex: 0.3 }}>
            <Subheading style={{ marginLeft: 20 }}>Username</Subheading>
            <TextInput
              value={username}
              style={{
                borderColor: colors.primary,
                elevation: 5,
                marginHorizontal: 20,
              }}
              onChangeText={(text) => setUsername(text)}
            />
          </View>

          <View style={{ flex: 0.3 }}>
            <Subheading style={{ marginLeft: 20 }}>Password</Subheading>
            <TextInput
              value={password}
              secureTextEntry
              style={{
                borderColor: colors.primary,
                elevation: 5,
                marginHorizontal: 20,
              }}
              onChangeText={(text) => setPassword(text)}
              right={<TextInput.Icon name="eye" />}
            />
          </View>
          <View
            style={{ flex: 0.2, flexDirection: "row", alignItems: "center", marginLeft: 20 }}
          >
            <Checkbox
              status={rememberAccount ? "checked" : "unchecked"}
              onPress={() => setRememberAccount(!rememberAccount)}
              color={colors.primary}
            />
            <Caption>Remember Login</Caption>
          </View>
          <View>
            <Button
              icon="account"
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={{ elevation: 5, marginHorizontal: 20 }}
            >
              Login
            </Button>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScreenComponent>
  );
};

export default LoginScreen;
