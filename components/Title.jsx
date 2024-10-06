import { View, Text } from "react-native";
import React from "react";

const Title = ({ title, titleStyle, more = true }) => {
  return (
    <View
      className={`flex-row justify-between items-center mb-6 mt-4 `}
    >
      <Text className={`text-[22px] font-black ${titleStyle}`}>{title}</Text>
      {more ? <Text className=" font-bold text-[#ECAE36]">See All</Text> : ""}
    </View>
  );
};

export default Title;
