import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Link href="/register" asChild>
        <TouchableOpacity>
          <Text style={{ color: "#fff" }}>Register</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/privacy" asChild>
        <TouchableOpacity>
          <Text style={{ color: "#fff" }}>Privacy</Text>
        </TouchableOpacity>
      </Link>

      <Link href="(authenticated)/(tabs)/home" asChild replace>
        <TouchableOpacity>
          <Text style={{ color: "#fff" }}>Login</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
});
