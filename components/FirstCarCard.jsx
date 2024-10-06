import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { shadowDistance } from "../lib/shadow-distance";

const FirstCarCard = ({ car }) => {
  return (
    <View className="w-[220px] rounded-lg bg-white">
      <Image
        source={{ uri: car.image }}
        className="w-full h-[120px] rounded-t-lg"
        resizeMode="cover"
      />
      <View className="w-full justify-between px-4">
        <View className=" text-center mt-2 mb-4 space-y-1">
          <Text className="text-lg font-black text-black">{car.name}</Text>
          <Text className="text-sm text-[#5CB88F] font-light w-full">{car.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default FirstCarCard;
