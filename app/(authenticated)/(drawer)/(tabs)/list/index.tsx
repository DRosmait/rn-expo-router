import Colors from "@/constants/Colors";
import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Link, Stack } from "expo-router";
import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

const ListPage = () => {
  const { onLogout } = useAuth();

  return (
    <View>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: "#fff",
          headerLeft: ({ tintColor }) => (
            /*
            Notice: You can use the 'DrawerToggleButton' component to show burger button and toggle the drawer.
          */
            <View style={{ left: -16 }}>
              <DrawerToggleButton tintColor={tintColor} />
            </View>
          ),
          headerRight: ({ tintColor }) => (
            /*
            Notice: You can use the 'replace' prop to replace the current route in navigation.
          */
            <TouchableOpacity onPress={onLogout}>
              <Ionicons name="log-out-outline" color={tintColor} size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Text>List Page</Text>

      <Link href="/(authenticated)/(drawer)/(tabs)/list/42" asChild>
        <Button title="Item 42" />
      </Link>

      <Text>Item Detail Page without bottom tabs</Text>
      <Link href="/(authenticated)/details/555" asChild>
        <Button title="Item 555" />
      </Link>
    </View>
  );
};

export default ListPage;
