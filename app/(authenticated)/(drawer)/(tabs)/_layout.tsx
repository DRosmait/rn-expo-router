import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import React from "react";
import { router } from "expo-router";

const ProfileScreen = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "My Homefeed",
          tabBarLabel: "Home",
          tabBarIcon: (props) => <Ionicons name="home-outline" {...props} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "My Profile",
          tabBarLabel: "Profile",
          tabBarIcon: (props) => (
            <Ionicons name="person-circle-outline" {...props} />
          ),
        }}
      />

      <Tabs.Screen
        name="action"
        options={{
          tabBarLabel: "Action",
          tabBarIcon: (props) => <Ionicons name="alert-circle" {...props} />,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.navigate("/modal");
          },
        }}
      />
    </Tabs>
  );
};

export default ProfileScreen;
