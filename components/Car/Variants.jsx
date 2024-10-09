import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import icons from "../../constants/icons";
import ContentContainer from "../ContentContainer";
import SpecHighlight from "./SpecHighlight";
import { TouchableOpacity } from "react-native";

const Variants = ({ variant, isShown, onPress }) => {
  return (
    <View className={isShown ? "" : ""}>
      <TouchableOpacity
        onPress={onPress}
        className={`flex-row items-center justify-between space-x-4 border-b py-4 border-light_grey_border ${
          variant.tier == 1 ? "border-t" : ""
        } ${isShown ? "border-green" : ""}`}
      >
        <View className="items-center space-y-2">
          <View
            className={`${
              isShown ? "bg-light_green" : "bg-gray_100"
            } rounded-full h-10 w-10`}
          >
            <Image
              source={icons.variant}
              className="h-6 w-6 m-auto"
              tintColor={isShown ? "green" : "black"}
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray">Tier {variant.tier}</Text>
        </View>

        <View className="flex-1">
          <Text className="text-base font-bold">{variant.variant}</Text>
          <Text className="text-green">{variant.price}</Text>
        </View>
        <Image
          source={icons.arrow}
          className={`w-6 h-6 -scale-[1] ${isShown ? "rotate-90" : ""}`}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {isShown ? (
        <View className="">
          <View className="flex-row space-x-4 my-8 ">
            <SpecHighlight
              icon={icons.fuelType}
              label={variant.performance.fuelType}
              bg="#FFEBED"
              title="Fuel Type"
              iconColor="#F44435"
            />
            <SpecHighlight
              icon={icons.seat}
              bg="#FFF9C5"
              label={variant.capacity.seatingCapacity}
              title="Capacity"
              iconColor="#F57E16"
            />
            <SpecHighlight
              icon={icons.transmission}
              label={variant.transmission.type}
              bg="#E8F5E9"
              title="Transmission"
              iconColor="#439F48"
            />
          </View>
          <View className="flex-row border-green px-2 border-y items-center space-x-4 py-4 justify-between">
            <Text className="font-bold">Full Details</Text>
            <Image
              source={icons.arrow}
              className="h-4 w-4 -scale-[1]"
              resizeMode="contain"
            />
          </View>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

export default Variants;
