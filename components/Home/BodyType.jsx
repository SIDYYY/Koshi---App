import React, { useState } from "react";
import { View, FlatList, Image, Text } from "react-native";
import Title from "../Title";
import carType from "../../lib/car-type";
import LogoCard from "../LogoCard";
import logos from "../../lib/logos";
import icons from "../../constants/icons";
import BodyTypeCard from "../../components/BodyTypeCard";
import ContentContainer from "../ContentContainer";

const BodyType = () => {
  return (
    <ContentContainer ph={false}>
      <Title title="Body Types" mt={false} px="p-5" />
      <View className="border-b border-gray_border mb-5" />
      <FlatList
        data={carType.slice(0, 10)}
        horizontal={true}
        renderItem={({ item }) => <BodyTypeCard type={item} />}
        keyExtractor={(item) => item.type}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 16, marginBottom: 20 }}
      />
    </ContentContainer>
  );
};
export default BodyType;
