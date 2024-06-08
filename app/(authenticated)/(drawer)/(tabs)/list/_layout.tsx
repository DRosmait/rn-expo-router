import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";

const ListLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="index" options={{ title: "List" }} />
      <Stack.Screen name="[id]" />
    </Stack>
  );
};

export default ListLayout;
