import { View, Text } from "react-native";
import React from "react";

const Title = ({ title, more = true, otherStyles }) => {
  return (
    <View className={`flex-row justify-between items-center mt-6 -mb-2 px-2 `}>
      <Text className={`text-base font-semibold ${otherStyles}`}>{title}</Text>
      {more ? <Text className="text-gray font-bold">View all</Text> : ""}
    </View>
  );
};

export default Title;
