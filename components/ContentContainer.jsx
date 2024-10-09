import { View, Text } from "react-native";
import React from "react";

const ContentContainer = ({ children, otherStyles, ph = true }) => {
  return <View className={`rounded-xl ${ph ? "px-4" : ''} bg-white py-4 ${otherStyles}`}>{children}</View>;
};

export default ContentContainer;
