import { View, Text, Image } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import { shadowDistance } from "../lib/shadow-distance";

const LogoCard = ({ logo}) => {
  return (
    <Shadow
      className={`h-[100px] w-[100px] p-3 items-center rounded-lg`}
      distance={shadowDistance}
    >
      <Image
        source={{ uri: logo.image }}
        className="h-full w-full flex-1"
        resizeMode="contain"
      />
    </Shadow>
  );
};

export default LogoCard;
