import { View, Text, Image } from "react-native";
import React from "react";
import icons from "../../constants/icons";

const SpecHighlight = ({ icon, iconColor, label, title, otherStyles }) => {
  return (
    <View
      className={`flex-1 items-center ${otherStyles} border-light_grey_border }`}
    >
      <Image
        source={icon}
        className="w-6 h-6 m-auto"
        resizeMode="contain"
        tintColor={iconColor}
      />
      <Text className="text-base mt-2 font-pregular">{label}</Text>
      <Text className="text-gray text-xs font-pregular">{title}</Text>
    </View>
  );
};

export default SpecHighlight;
