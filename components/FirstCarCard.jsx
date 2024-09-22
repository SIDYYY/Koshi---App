import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Shadow } from "react-native-shadow-2";

const FirstCarCard = ({ car }) => {
  return (
    <View className="w-[250px] rounded-lg bg-white">
      <Image
        source={{ uri: car.image }}
        className="w-full h-[140px] rounded-t-lg"
        resizeMode="contain"
      />
      <Shadow
        sides={{ top: false }}
        offset={[0, 0]}
        distance={3}
        endColor=""
        className="bg-white w-full rounded-b-[10px] pt-4 "
      >
        <View className="w-full justify-between px-4 pb-4">
          <View className=" text-center">
            <Text className="text-base font-black text-black">{car.name}</Text>
            <Text className="text-sm text-[#9B9B9B] my-[5px] w-full">
              {car.variants} Variants & Specifications
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            className="mt-6 border border-[#101820] p-2 w-full rounded-lg"
            onPress={() => handleCarSelect(car)}
          >
            <Text className="text-sm font-bold text-center">View Details</Text>
          </TouchableOpacity>
        </View>
      </Shadow>
    </View>
  );
};

export default FirstCarCard;
