import { Stack } from "expo-router";
import React from "react";

const AuthenticatedStackLayout = () => {
  return (
    /**
     * Notice: You can use the 'Stack' navigator as a sibling to the 'Tabs'
     * navigator to hide bottom tabs for this Stack screens.
     */
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="details/[id]" options={{ title: "Authenticated" }} />
    </Stack>
  );
};

export default AuthenticatedStackLayout;
