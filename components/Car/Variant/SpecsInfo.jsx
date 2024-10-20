import { View, Text } from "react-native";
import React from "react";

const SpecsInfo = ({ title, content }) => {
  return (
    <View className="flex-row justify-between mx-2 pt-4 pb-2 mb-2 border-b border-light_grey_border">
      <Text className="text-base">{title}</Text>
      <Text className="text-base text-green_primary">{content}</Text>
    </View>
  );
};

export default SpecsInfo;
