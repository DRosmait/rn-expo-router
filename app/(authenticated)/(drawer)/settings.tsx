import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { View, Text, Button } from "react-native";

const Settings = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View>
      <Text>Settings screen</Text>

      <Button title="Programatically open drawer" onPress={openDrawer} />
    </View>
  );
};

export default Settings;
