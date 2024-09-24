import React, { useState } from "react";
import { View, FlatList } from "react-native";
import cars from "../../lib/ford";
import FirstCarCard from "../FirstCarCard";
import carType from "../../lib/car-type";
import CarFilterPill from "../CarFilterPill";
import Title from "../Title";
import SeeMore from "../SeeMore";

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
      <Title title="Popular New Cars" />
      <FlatList
        data={carType}
        horizontal={true}
        renderItem={({ item }) => (
          <View className="mt-3">
            <CarFilterPill
              item={item}
              handleFrameSelect={handleFrameSelect}
              activeFrame={activeFrame}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <FlatList
        data={cars}
        horizontal={true}
        renderItem={({ item }) => (
          <View className="mt-6 py-2 mx-3">
            <FirstCarCard car={item} />
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
      <SeeMore label="View More New Cars" />
    </>
  );
};
export default NewCars;
