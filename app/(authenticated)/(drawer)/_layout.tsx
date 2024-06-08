import React from "react";
import { Drawer } from "expo-router/drawer";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.primary,
        drawerActiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Home",
          drawerIcon: (props) => <Ionicons name="home-outline" {...props} />,
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          title: "Settings",
          drawerIcon: (props) => (
            <Ionicons name="settings-outline" {...props} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
