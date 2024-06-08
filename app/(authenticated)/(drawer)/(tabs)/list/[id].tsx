import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { View, Text } from "react-native";

const ListItemDetailPage = () => {
  const { id } = useLocalSearchParams();
  //   const { setOptions } = useNavigation();

  //   useEffect(() => {
  //     setOptions({
  //       title: "Item " + id,
  //     });
  //   });

  return (
    <View>
      {/* 
        Notice: You can use the 'Stack.Screen' component to define the screen options inside the Screen component
        as an alternative to using the 'useNavigation' hook with 'setOptions' function.
      */}
      <Stack.Screen options={{ title: "Item " + id }} />
      <Text>Detail page for: {id}</Text>
    </View>
  );
};

export default ListItemDetailPage;
