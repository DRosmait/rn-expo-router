import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import React from "react";

const AuthenticatedStackLayout = () => {
  return (
    /**
     * Notice: You can use the 'Stack' navigator as a sibling to the 'Tabs'
     * navigator to hide bottom tabs for this Stack screens.
     */
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="details/[id]"
        options={{
          title: "Authenticated",
          headerShown: true,
          headerBackTitle: "Back",
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: "#fff",
        }}
      />

      {/* 
          Notice: You can use the `presentation` option to specify the presentation style.
          For example, "modal" will present the screen modally.
        */}
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
};

export default AuthenticatedStackLayout;
