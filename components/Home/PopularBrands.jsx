import React, { useState } from "react";
import { View, FlatList, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import Title from "../Title";
import LogoCard from "../LogoCard";
import logos from "../../lib/logos";
import icons from "../../constants/icons";
import ContentContainer from "../ContentContainer";

export default function PopularBrands() {
  return (
    <>
      <Title title="Popular Brands" />
      <ContentContainer ph={false}>
        <FlatList
          data={logos.slice(0, 10)}
          horizontal={true}
          renderItem={({ item }) => <LogoCard logo={item} otherStyles="" />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ paddingHorizontal: 14, gap: 16 }}
        />
      </ContentContainer>
    </>
  );
}
