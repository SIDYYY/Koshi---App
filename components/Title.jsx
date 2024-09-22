import { View, Text } from "react-native";
import React from "react";


const Title = ({ title, titleStyle }) => {
  return (
    <View className={`flex-row mt-11 justify-between px-4`}>
      <Text className={`text-2xl font-black ${titleStyle}`}>{title}</Text>
    </View>
  );
};

export default Title;
