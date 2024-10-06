import { View, Text, Image } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import { shadowDistance } from "../lib/shadow-distance";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const LogoCard = ({
  logo,
  isSelected,
  setIsClicked,
  value,
  otherStyles,
}) => {
  return (
    <TouchableOpacity
      className="relative bg-white rounded-lg justify-between"
      activeOpacity={0.7}
      onPress={() => {
        value === logo.name ? setIsClicked("") : setIsClicked(logo.name);
      }}
    >
      <View className={`h-[100px] w-[100px] p-4 m-auto ${otherStyles}`}>
        <Image
          source={{ uri: logo.image }}
          className="h-full w-full flex-1"
          resizeMode="contain"
        />
      </View>
      {/* <View className="bg-[#9b9b9b] h-12 rounded-b-lg">
        <Text className="text-white m-auto">{logo.name}</Text>
      </View> */}

      {isSelected ? (
        <View className="absolute w-full h-full bg-black/10 items-center justify-center rounded-lg border border-[#57AE78]">
          <TouchableOpacity
            className="rounded-md bg-[#57AE78]"
            activeOpacity={0.7}
            onPress={() => {
              router.push("/model");
              setIsClicked("");
            }}
          >
            <Text className="px-4 py-2 text-white">Select</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default LogoCard;
