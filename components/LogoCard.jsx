import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const LogoCard = ({ logo, isSelected, otherStyles }) => {
  return (
    <TouchableOpacity
      className="relative border border-gray_border rounded-lg justify-between"
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
