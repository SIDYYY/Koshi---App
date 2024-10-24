import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { formatPrice } from "../utils/price-format";

const MainCarCard = ({ car }) => {
  const carId = car.id;
  const price = car && formatPrice(car.price);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => router.push(`/car/${carId}`)}
      className="w-[220px]"
    >
      <Image
        source={{ uri: car.image }}
        className="w-full h-[120px] rounded-2xl"
        resizeMode="cover"
      />
      <View className="w-full justify-between rounded-b-lg">
        <View className=" text-center mt-2 space-y-1">
          <Text className="text-base font-pbold">{car.name}</Text>
          <View className="flex-row items-center space-x-2">
            <Text className="text-sm rounded-full text-green_primary font-psemibold">
              {price}
            </Text>
            <View className="h-1 w-1 bg-gray_inactive rounded-full" />
            <Text className="text-gray_inactive font-psemibold">
              {car.bodyType}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MainCarCard;
