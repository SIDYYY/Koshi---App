import { View, Text } from "react-native";
import React from "react";

const Title = ({ title, more = true }) => {
  return (
    <View className={`flex-row justify-between items-center mt-6 -mb-2 px-2`}>
      <Text className={`text-base font-semibold `}>{title}</Text>
      {more ? <Text className="text-gray">See All</Text> : ""}
    </View>
  );
};

export default Title;
