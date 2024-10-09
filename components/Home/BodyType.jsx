import React, { useState } from "react";
import { View, FlatList, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import Title from "../Title";
import carType from "../../lib/car-type";
import LogoCard from "../LogoCard";
import logos from "../../lib/logos";
import icons from "../../constants/icons";
import BodyTypeCard from "../../components/BodyTypeCard";
import ContentContainer from "../ContentContainer";

const BodyType = () => {
  return (
    <>
      <Title title="Body Types" more={false} px={true} />
      <ContentContainer ph={false}>
        <FlatList
          data={carType.slice(0, 10)}
          horizontal={true}
          renderItem={({ item }) => <BodyTypeCard type={item} />}
          keyExtractor={(item) => item.type}
          contentContainerStyle={{ paddingHorizontal: 14, gap: 16 }}
        />
      </ContentContainer>
    </>
  );
};
export default BodyType;
