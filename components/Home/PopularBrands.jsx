import React, { useState } from "react";
import { View, FlatList, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import Title from "../Title";
import LogoCard from "../LogoCard";
import logos from "../../lib/logos";
import icons from "../../constants/icons";

export default function PopularBrands() {
  return (
    <View className=" rounded-lg mt-4 bg-white py-4">
      <Title title="Popular Brands" />
      <FlatList
        data={logos.slice(0, 10)}
        horizontal={true}
        renderItem={({ item }) => <LogoCard logo={item} otherStyles="" />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingHorizontal: 14, gap: 16 }}
      />
    </View>
  );
}
