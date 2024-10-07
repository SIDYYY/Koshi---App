import { View, Text, Image } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import { shadowDistance } from "../lib/shadow-distance";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const LogoCard = ({
  logo,
  isSelected,
  otherStyles,
}) => {
  return (
    <TouchableOpacity
      className="relative border border-[#e2e2e2] rounded-lg justify-between"
      activeOpacity={0.7}
      onPress={() => router.push("/model")}
    >
      <View className={`h-[100px] w-[100px] p-4 m-auto ${otherStyles}`}>
        <Image
          source={{ uri: logo.image }}
          className="h-full w-full flex-1"
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

export default LogoCard;
