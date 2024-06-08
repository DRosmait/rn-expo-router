import Colors from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function InitialLayout() {
  const [fontLoaded, fontError] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  useEffect(() => {
    // Hide the splash screen when the font is loaded.
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />

      {/* 
        Notice: Each navigator (e.g. Stack) in _layout.tsx automatically find all screens in the same folder.
        But to provide a custom configuration, you can use Screen components (e.g. Stack.Screen) to define the screen options.
      */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="register"
          options={{
            headerTitle: "Register",
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="privacy"
          options={{
            headerTitle: "Privacy Policy",
            headerBackTitle: "Back",
          }}
        />
        {/* 
          Notice: The `name` prop is a regular expression that matches the screen name.
          You can group screens under a single route using (groupname) syntax.
        */}
        <Stack.Screen name="(authenticated)" options={{ headerShown: false }} />
        {/* 
          Notice: You can use the `presentation` option to specify the presentation style.
          For example, "modal" will present the screen modally.
        */}
        <Stack.Screen
          name="modal"
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  // With this structure you can wrap the InitialLayout with any provider.
  return <InitialLayout />;
}
