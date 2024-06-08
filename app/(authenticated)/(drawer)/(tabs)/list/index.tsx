import { Link } from "expo-router";
import React from "react";
import { View, Text, Button } from "react-native";

const ListPage = () => {
  return (
    <View>
      <Text>List Page</Text>

      <Link href="/(authenticated)/(drawer)/(tabs)/list/42" asChild>
        <Button title="Item 42" />
      </Link>

      <Text>Item Detail Page without bottom tabs</Text>
      <Link href="/(authenticated)/details/555" asChild>
        <Button title="Item 555" />
      </Link>
    </View>
  );
};

export default ListPage;
