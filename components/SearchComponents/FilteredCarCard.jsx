import { View, Text, Image } from "react-native";
import React from "react";

const FilteredCarCard = ({ car }) => {
  return (
    <View className="flex-1 basis-[150px] max-w-[150px]">
      <Image source={{ uri: car.image }} className="h-[100px] w-full rounded-lg" />
      <Text className="font-black text-lg">{car.name}</Text>
      <Text>{car.bodyType}</Text>
    </View>
  );
};

export default FilteredCarCard;
