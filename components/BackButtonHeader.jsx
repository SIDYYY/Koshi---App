import { Text, Image, View } from "react-native";
import React from "react";
import icons from "../constants/icons";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const BackButtonHeader = ({ title, type, otherStyles }) => {
  return (
    <TouchableOpacity
      className={`flex-row items-center relative mt-4 ${otherStyles}`}
      activeOpacity={0.7}
      onPress={() => router.back()}
    >
      <View className="absolute">
        <Image
          source={icons.arrow}
          className="w-6 h-6 m-auto "
          tintColor={type ? "#fff" : "#000"}
          resizeMode="contain"
        />
      </View>

      <Text className={`text-lg text-${type ? "white" : "black"}  font-bold flex-1 text-center`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BackButtonHeader;
