import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    /*
      Notice: You can use the 'DrawerActions.openDrawer()' method to open the drawer programmatically.
    */
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Settings screen</Text>

        <Button title="Programatically open drawer" onPress={openDrawer} />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
