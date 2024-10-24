import React from "react";
import { View, FlatList, Text } from "react-native";
import Title from "../Title";
import reasons from "../../lib/reasons";
import ReasonsCard from "./ReasonsCard";
import ContentContainer from "../ContentContainer";

const WhyKoshi = () => {
  return (
    <ContentContainer ph={false}>
      <Title title="Why Koshi?" more={false} mt={false} px="p-5" />
      <View className="border-b border-gray_border mb-5" />
      <FlatList
        data={reasons}
        horizontal={true}
        renderItem={({ item }) => <ReasonsCard reasons={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 16,
          marginBottom: 20,
        }}
      />
    </ContentContainer>
  );
};
export default WhyKoshi;
