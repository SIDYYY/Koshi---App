import { Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from "react-native";
import icons from "../constants/icons";

const SeeMore = ({label}) => {
  return (
    <TouchableOpacity className="flex-row items-center justify-end mr-4 space-x-2 mt-2">
      <Text className="text-base font-bold text-yellow_primary">{label}</Text>
      <Image source={icons.arrow} className="w-3 h-3" resizeMode="contain" />
    </TouchableOpacity>
  );
}

export default SeeMore