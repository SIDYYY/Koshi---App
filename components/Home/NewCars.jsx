import React, { useState } from "react";
import { View, FlatList, Text, Image } from "react-native";
import cars from "../../lib/ford";
import FirstCarCard from "../FirstCarCard";
import Title from "../Title";
import ContentContainer from "../ContentContainer";

const NewCars = () => {
  // const navigation = useNavigation();

  // // Function to handle frame selection

  // const handleCarSelect = (car) => {
  //   navigation.navigate("Details", { car });
  // };
  const [activeFrame, setActiveFrame] = useState("SUV");
  const handleFrameSelect = (frame) => {
    setActiveFrame(frame);
  };

  return (
    <>
      <Title title="Popular Cars" />
      <ContentContainer ph={false}>
        <FlatList
          data={cars}
          horizontal={true}
          renderItem={({ item }) => <FirstCarCard car={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 14, gap: 16 }}
        />
      </ContentContainer>
    </>
  );
};
export default NewCars;
