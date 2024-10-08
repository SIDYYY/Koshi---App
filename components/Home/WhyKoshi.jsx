import React from "react";
import { View, FlatList, Text } from "react-native";
import Title from "../Title";
import reasons from "../../lib/reasons";
import ReasonsCard from "./ReasonsCard";
import ContentContainer from "../ContentContainer";

const WhyKoshi = () => {
  return (
    <ContentContainer ph={false}>
      <Title title="Why Koshi?" more={false} px={true} />
      <FlatList
        data={reasons}
        horizontal={true}
        renderItem={({ item }) => <ReasonsCard reasons={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 14, gap: 16 }}
      />
    </ContentContainer>
  );
};
export default WhyKoshi;
