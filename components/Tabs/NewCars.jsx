import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import cars from "../../lib/ford";
import MainCarCard from "../MainCarCard";
import carType from "../../lib/car-type";
import CarFilterPill from "../CarFilterPill";
import Title from "../Title";
import ProceedArrow from "../ProceedArrow";

export default function Popular() {
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
            <MainCarCard car={item} />
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
      <ProceedArrow label="View More New Cars" />
    </>
  );
}
