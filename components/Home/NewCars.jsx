import React, { useState } from "react";
import { View, FlatList, Text, Image } from "react-native";
import cars from "../../lib/ford";
import MainCarCard from "../MainCarCard";
import Title from "../Title";
import ContentContainer from "../ContentContainer";

const NewCars = () => {
  return (
    <>
      <Title title="Popular Cars" />
      <ContentContainer ph={false}>
        <FlatList
          data={cars}
          horizontal={true}
          renderItem={({ item }) => <MainCarCard car={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 14, gap: 16 }}
        />
      </ContentContainer>
    </>
  );
};
export default NewCars;
