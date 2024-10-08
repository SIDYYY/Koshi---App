import { View, Text, Image } from "react-native";
import React from "react";
import icons from "../../constants/icons";

const SpecHighlight = ({ icon, iconColor, label, title, bg }) => {
  return (
    <View className="flex-1 items-center">
      <View className={`h-12 w-12 bg-[${bg}] rounded-full`}>
        <Image
          source={icon}
          className="w-6 h-6 m-auto"
          resizeMode="contain"
          tintColor={iconColor}
        />
      </View>
      <Text className="text-base font-bold mt-2">{label}</Text>
      <Text className="text-gray text-xs">{title}</Text>
    </View>
  );
};

export default SpecHighlight;
