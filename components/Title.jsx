import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import icons from "../constants/icons";

const Title = ({title}) => {
  return (
    <View className="flex-row mt-11 justify-between px-4 ">
      <Text className="text-2xl font-black ">{title}</Text>
      <TouchableOpacity className="flex-row items-center justify-center space-x-2">
        <Text className="text-sm text-[#ECAE36]">See More</Text>
        <Image source={icons.arrow} className="w-2 h-3" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}

export default Title