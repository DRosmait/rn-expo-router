import Colors from "@/constants/Colors";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Slot, Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
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

  const { token, initialized } = useAuth();
  const router = useRouter();
  // Get the current route segments to check path parts.
  const segments = useSegments();

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

  /**
   * Notice: To prevent navigation to (authenticated) for unlogged user we need to check if the token is present.
   * If the token is present but the app isn't in (authenticated) route group, we redirect user to the (authenticated) route.
   * If the token is not present and the app is in (authenticated) route, we redirect user to the "/" login route.
   */
  useEffect(() => {
    if (!initialized) return;

    const isInAuthGroup = segments[0] === "(authenticated)";

    if (token && !isInAuthGroup) {
      router.replace("/(authenticated)/(drawer)/(tabs)/home");
    } else if (!token && isInAuthGroup) {
      router.replace("/");
    }
  }, [initialized, token, segments]);

  if (!fontLoaded || !initialized) {
    return <Slot />;
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
      </Stack>
    </>
  );
}

export default function RootLayout() {
  // With this structure you can wrap the InitialLayout with any provider.
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}
