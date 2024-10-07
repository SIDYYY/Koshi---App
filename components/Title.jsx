import { View, Text } from "react-native";
import React from "react";

const Title = ({ title, titleStyle, more = true }) => {
  return (
    <View className={`flex-row justify-between items-center -mt-1 mb-4  px-4`}>
      <Text className={`text-xl font-semibold ${titleStyle}`}>{title}</Text>
      {more ? <Text className="text-green">See All</Text> : ""}
    </View>
  );
};

export default Title;
