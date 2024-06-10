import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { router } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import { useAuth } from "@/context/AuthContext";

const TabsLayout = () => {
  const { onLogout } = useAuth();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: "#fff",
        headerLeft: ({ tintColor }) => (
          /*
            Notice: You can use the 'DrawerToggleButton' component to show burger button and toggle the drawer.
          */
          <DrawerToggleButton tintColor={tintColor} />
        ),
        headerRight: ({ tintColor }) => (
          /*
            Notice: You can use the 'replace' prop to replace the current route in navigation.
          */
          <TouchableOpacity onPress={onLogout} style={{ marginRight: 20 }}>
            <Ionicons name="log-out-outline" color={tintColor} size={24} />
          </TouchableOpacity>
        ),
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

      <Tabs.Screen
        name="list"
        options={{
          headerShown: false,
          tabBarLabel: "List",
          tabBarIcon: (props) => <Ionicons name="list" {...props} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
