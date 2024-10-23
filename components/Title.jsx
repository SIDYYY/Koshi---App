import { View, Text } from "react-native";
import React from "react";

const Title = ({
  title,
  more = true,
  otherStyles,
  px = "px-2",
  mt = "mt-6 ",
}) => {
  return (
    <View className={`flex-row justify-between items-center ${px} ${mt} `}>
      <Text className={`text-base font-bold ${otherStyles}`}>{title}</Text>
      {more ? <Text className="text-gray font-bold">View all</Text> : ""}
    </View>
  );
};

export default Title;
