import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import cars from "../lib/ford";
import FirstCarCard from "./FirstCarCard";
import carType from "../lib/car-type";
import CarTypePill from "./CarTypePill";
import { Shadow } from "react-native-shadow-2";

export default function Popular() {
  const navigation = useNavigation();
  const [activeFrame, setActiveFrame] = useState("SUV");
  const handleFrameSelect = (frame) => {
    setActiveFrame(frame);
  };

  // Function to handle frame selection

  const handleCarSelect = (car) => {
    navigation.navigate("Details", { car });
  };

  return (
    <>
        <FlatList
          data={carType}
          horizontal={true}
          renderItem={({ item }) => (
            <CarTypePill
              item={item}
              handleFrameSelect={handleFrameSelect}
              activeFrame={activeFrame}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      <FlatList
        data={cars}
        horizontal={true}
        renderItem={({ item }) => (
          <View className="mt-8 py-2 mx-3">
            <FirstCarCard car={item} />
          </View>
        )}
        keyExtractor={(item) => item.name}
      />  

    </>
  );
}
