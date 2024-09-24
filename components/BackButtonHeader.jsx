import {  Text, Image } from "react-native";
import React from "react";
import icons from "../constants/icons";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const BackButtonHeader = ({ title }) => {
  return (
    <TouchableOpacity
      className="flex-row items-center ml-[14px] space-x-6 mt-2"
      onPress={() => router.back()}
    >
      <Image
        source={icons.arrow}
        className="w-4 h-4 scale-x-[-1]"
        tintColor="#101820"
        resizeMode="contain"
      />
      <Text className="text-base">{title}</Text>
    </TouchableOpacity>
  );
};

export default BackButtonHeader;
