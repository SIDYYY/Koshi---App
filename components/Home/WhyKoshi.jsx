import React from "react";
import { View, FlatList, Text } from "react-native";
import Title from "../Title";
import reasons from "../../lib/reasons";
import ReasonsCard from "./ReasonsCard";

const WhyKoshi = () => {
  return (
    <View className=" rounded-lg mt-4 bg-white py-4">
      <Title title="Why Koshi?" more={false} />
      <FlatList
        data={reasons}
        horizontal={true}
        renderItem={({ item }) => <ReasonsCard reasons={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 14, gap: 16 }}
      />
    </View>
  );
};
export default WhyKoshi;
