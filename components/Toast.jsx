import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import icons from "@/constants/icons";

const Toast = ({ text1, text2 }) => {
  return (
    <View
      className={`h-[75px]  w-[90%] self-stretch rounded-lg border-l-[12px] absolute mx-[5%] top-4 bg-white flex-row items-center ${
        text1 === "Success" ? "border-toast_success" : "border-toast_error"
      }`}
    >
      <Image
        source={text1 === "Success" ? icons.check : icons.error}
        className="h-7 w-7 mx-4"
        resizeMode="contain"
      />
      <View className="max-w-[70%]">
        <Text className="text-base font-pblack">{text1}</Text>
        <Text className="text-[12px] text-gray_inactive">{text2}</Text>
      </View>
    </View>
  );
};

export default Toast;
