import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabScreenProps,
} from "@react-navigation/material-bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import RoutinesScreen from "../screens/routinesScreen";
import CommunityScreen from "../screens/communityScreen";
import MessagesScreen from "../screens/messagesScreen";
import { useTheme } from "react-native-paper";
import profileScreen from "../screens/profileScreen";

export type BaseStackParamList = {
  Routine: undefined;
  Progress: undefined;
  Community: undefined;
  Messages: undefined;
  Profile: undefined;
};

export type RoutineScreenProps = MaterialBottomTabScreenProps<
  BaseStackParamList,
  "Routine"
>;

export type ProgressScreenProps = MaterialBottomTabScreenProps<
  BaseStackParamList,
  "Progress"
>;

export type CommunityScreenProps = MaterialBottomTabScreenProps<
  BaseStackParamList,
  "Community"
>;

export type MessagesScreenProps = MaterialBottomTabScreenProps<
  BaseStackParamList,
  "Messages"
>;

export type ProfileScreenProps = MaterialBottomTabScreenProps<
  BaseStackParamList,
  "Profile"
>;

const Tab = createMaterialBottomTabNavigator<BaseStackParamList>();

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
        component={profileScreen}
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
