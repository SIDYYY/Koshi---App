import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const CarFilterPill = ({ item, handleFrameSelect, activeFrame }) => {
  const value = item.type ? item.type : item;
  return (
    <View
      className={`ml-2 ${value === "Minivans" ? "mr-4" : ""} ${
        value === "SUV" ? "ml-4" : ""
      }`}
    >
      <TouchableOpacity
        key={value}
        activeOpacity={0.7}
        className={`min-w-[55px] min-h-[32px] justify-center items-center px-3 rounded-md ${
          activeFrame === value ? "bg-black" : "bg-[#E0E0E0]"
        } `}
        onPress={() => handleFrameSelect(value)}
      >
        <Text
          className={` ${
            activeFrame === value ? "text-white  font-bold" : "text-[#9B9B9B]"
          }`}
        >
          {value}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CarFilterPill;
