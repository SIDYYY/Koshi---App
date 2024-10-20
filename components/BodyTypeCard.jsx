import { Text, Image, View } from "react-native";
import React from "react";

const BodyTypeCard = ({ type }) => {
  return (
    <View className="h-[110px] w-[130px] p-3 rounded-lg items-center border relative  border-gray_border">
      <Image
        source={{ uri: type.image }}
        className="h-full w-full flex-1"
        resizeMode="contain"
      />
      <Text className="font-bold">{type.type}</Text>
    </View>
  );
};

export default BodyTypeCard;
