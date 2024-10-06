import { View, Text } from "react-native";
import React from "react";

const Title = ({ title, titleStyle, more = true }) => {
  return (
    <View className={`flex-row justify-between items-center mb-6 mt-10 `}>
      <Text className={`text-[22px] font-bold ${titleStyle}`}>{title}</Text>
      {more ? <Text className=" font-bold text-[#9b9b9b]">See All</Text> : ""}
    </View>
  );
};

export default Title;
