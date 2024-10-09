import { View, Text } from "react-native";
import React from "react";

const Pill = ({ label, textOnly = true, otherStyles }) => {
  return (
    <View className={`${textOnly ? "" : "flex-row space-x-4 ml-4 mt-2"}`}>
      <Text className={`bg-gray_100 px-3 py-1 rounded-full ${otherStyles}`}>{label}</Text>
    </View>
  );
};

export default Pill;
