import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabScreenProps,
} from "@react-navigation/material-bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import RoutinesScreen from "../screens/routinesScreen";
import ProgressScreen from "../screens/progressScreen";
import CommunityScreen from "../screens/communityScreen";
import MessagesScreen from "../screens/messagesScreen";
import ProfileScreen from "../screens/profileScreen";
import { useTheme } from "react-native-paper";

export type RootStackParamList = {
  Routine: undefined;
  Progress: undefined;
  Community: undefined;
  Messages: undefined;
  Profile: undefined;
};

export type RoutineScreenProps = MaterialBottomTabScreenProps<
  RootStackParamList,
  "Routine"
>;

export type ProgressScreenProps = MaterialBottomTabScreenProps<
  RootStackParamList,
  "Progress"
>;

export type CommunityScreenProps = MaterialBottomTabScreenProps<
  RootStackParamList,
  "Community"
>;

export type MessagesScreenProps = MaterialBottomTabScreenProps<
  RootStackParamList,
  "Messages"
>;

export type ProfileScreenProps = MaterialBottomTabScreenProps<
  RootStackParamList,
  "Profile"
>;

const Tab = createMaterialBottomTabNavigator<RootStackParamList>();

const BaseAppNavigation = () => {
  const { colors } = useTheme();

  return (

    <Tab.Navigator initialRouteName="Routine" shifting={false} activeColor={'#fff'}>
      <Tab.Screen
        name="Routine"
        component={RoutinesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-text-multiple"
              color={color}
              size={26}
            />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-line" color={color} size={26} />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-month"
              color={color}
              size={26}
            />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="message"
              color={color}
              size={26}
            />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BaseAppNavigation;
