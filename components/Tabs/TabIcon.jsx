import { View, Text, Image } from "react-native";
import React from "react";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        className="h-6 w-6"
        resizeMode="contain"
        tintColor={color}
      />
      <Text
        className={`${
          focused
            ? "font-psemibold text-[#ECAE36]"
            : "font-normal text-gray_inactive"
        } text-xs`}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
