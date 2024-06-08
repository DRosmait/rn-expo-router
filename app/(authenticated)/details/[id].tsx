import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OverTabsDetailPage = () => {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <View>
        {/* 
          Notice: You can use the 'Stack.Screen' component to define the screen options inside the Screen component
          as an alternative to using the 'useNavigation' hook with 'setOptions' function.
        */}
        <Stack.Screen options={{ title: "Item " + id }} />
        <Text>Details page without Tabs below</Text>
        <Text>Detail page for: {id}</Text>
      </View>
    </SafeAreaView>
  );
};

export default OverTabsDetailPage;
