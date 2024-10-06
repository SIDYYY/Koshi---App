import React, { useState } from "react";
import { View, FlatList, Text, Image } from "react-native";
import cars from "../../lib/ford";
import FirstCarCard from "../FirstCarCard";
import Title from "../Title";
import SeeMore from "../SeeMore";
import icons from "../../constants/icons";

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
    <View className="">
      <Title title="Popular Cars" /> 
      <FlatList
        data={cars}
        horizontal={true}
        renderItem={({ item }) => <FirstCarCard car={item} />}
        className="-mx-[14px]"
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingHorizontal: 14, gap: 16 }}
      />
    </View>
  );
};
export default NewCars;
