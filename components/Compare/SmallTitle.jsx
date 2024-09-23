import { View, Text, Image } from "react-native";
import React from "react";
import icons from "../../constants/icons";
import { TouchableOpacity } from "react-native";

const SmallTitle = ({ text, previous}) => {
  return (
    <View className="flex-row mt-9 items-center justify-between">
      <Text className="mx-4 font-bold text-base">{text}</Text>
      <View>
        {previous ? (
          <TouchableOpacity
            className="flex-row items-center justify-end mr-4 space-x-2"
            activeOpacity={0.7}
          >
            <Text className="text-sm font-bold text-[#ECAE36]">
              Change {previous}
            </Text>
            <Image
              source={icons.change}
              className="w-3 h-3"
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default SmallTitle;
