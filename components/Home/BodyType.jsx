import React, { useState } from "react";
import { View, FlatList, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import Title from "../Title";
import carType from "../../lib/car-type";
import LogoCard from "../LogoCard";
import logos from "../../lib/logos";
import icons from "../../constants/icons";
import BodyTypeCard from "../../components/BodyTypeCard";

const BodyType = () => {
  return (
    <View className=" rounded-lg mt-4 bg-white py-4">
      <Title title="Body Types" more={false} />
      <FlatList
        data={carType.slice(0, 10)}
        horizontal={true}
        renderItem={({ item }) => <BodyTypeCard type={item} />}
        keyExtractor={(item) => item.type}
        contentContainerStyle={{ paddingHorizontal: 14, gap: 16 }}
      />
    </View>
  );
};
export default BodyType;
