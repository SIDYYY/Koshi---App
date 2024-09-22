import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

const CarTypePill = ({ item, handleFrameSelect, activeFrame }) => {

  return (
    <View
      className={`ml-2 ${item.type === "Minivans" ? "mr-4" : ""} ${
        item.type === "SUV" ? "ml-4" : ""
      }`}
    >
      <TouchableOpacity
        key={item.type}
        activeOpacity={0.7}
        className={`min-w-[55px] min-h-[32px] justify-center items-center px-3 rounded-[5px] ${
          activeFrame === item.type ? "bg-black" : "bg-[#E0E0E0]"
        } `}
        onPress={() => handleFrameSelect(item.type)}
      >
        <Text
          className={` ${
            activeFrame === item.type
              ? "text-white  font-bold"
              : "text-[#9B9B9B]"
          }`}
        >
          {item.type}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CarTypePill;
