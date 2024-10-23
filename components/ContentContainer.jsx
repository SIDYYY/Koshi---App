import { View, Text } from "react-native";
import React from "react";

const ContentContainer = ({ children, otherStyles, ph = true }) => {
  return (
    <View
      className={`rounded-xl ${
        ph ? "px-4" : ""
      } mt-4 bg-white  ${otherStyles}`}
    >
      {children}
    </View>
  );
};

export default ContentContainer;
