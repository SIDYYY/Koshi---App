import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const MainCarCard = ({ car }) => {
  const carId = car.id;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => router.push(`/car/${carId}`)}
      className="w-[220px]"
    >
      <Image
        source={{ uri: car.image }}
        className="w-full h-[120px] rounded-t-lg"
        resizeMode="cover"
      />
      <View className="w-full justify-between px-4 border border-t-0 rounded-b-lg border-gray_border">
        <View className=" text-center mt-2 mb-4 space-y-1">
          <Text className="text-lg font-black text-black">{car.name}</Text>
          <Text className="text-sm text-green_primary font-light w-full">
            {car.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MainCarCard;
