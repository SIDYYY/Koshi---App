import { View, Text } from "react-native";
import React from "react";

const MainTabIcon = ({ icon, color, name, focused }) => {
  return (
    <View
      className={`items-center justify-center relative ${
        name === "Search" && focused
          ? "bg-[#5CB88F] w-full h-full rounded-lg absolute bottom-4"
          : ""
      }`}
    >
      <Image
        source={icon}
        className="h-6 w-6"
        resizeMode="contain"
        tintColor={name === "Search" && focused ? "#ffffff" : color}
      />
      {name != "Search" ? (
        <Text
          className={`font-semibold text-4xl absolute -m-5 bottom-0  ${
            focused ? "text-[#5CB88F]" : "text-white"
          }`}
        >
          .
        </Text>
      ) : null}
    </View>
  );
};

const CompareTabIcon = ({ name, focused }) => {
  return (
    <View
      className={`items-center justify-center gap-2 h-[90%] w-full ${
        focused ? "border-t-4 border-[#ECAE36]" : null
      }`}
    >
      <Text
        className={`${
          focused ? "font-black text-[#ECAE36]" : "font-normal text-[#9b9b9b]"
        } text-base uppercase`}
      >
        {name}
      </Text>
    </View>
  );
};

export default { MainTabIcon, CompareTabIcon };
