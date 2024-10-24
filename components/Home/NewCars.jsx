import React, { useState } from "react";
import { View, FlatList, Text, Image } from "react-native";
import cars from "../../lib/ford";
import MainCarCard from "../MainCarCard";
import Title from "../Title";
import ContentContainer from "../ContentContainer";


const NewCars = () => {
  return (
    <ContentContainer ph={false}>
      <Title title="Popular Cars" mt={false} px="p-5" />
      <View className="border-b border-gray_border mb-5" />
      <FlatList
        data={cars}
        horizontal={true}
        renderItem={({ item }) => <MainCarCard car={item} />}
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
export default NewCars;
