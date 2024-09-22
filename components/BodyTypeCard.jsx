import { View, Text, Image } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import { shadowDistance } from "../lib/shadow-distance";

const BodyTypeCard = ({ type }) => {
  return (
    <Shadow className="h-[100px] w-[120px] p-3 rounded-lg items-center " distance={shadowDistance}>
      <Image
        source={{ uri: type.image }}
        className="h-full w-full flex-1"
        resizeMode="contain"
      />
      <Text className="">{type.type}</Text>
    </Shadow>
  );
};

export default BodyTypeCard;
