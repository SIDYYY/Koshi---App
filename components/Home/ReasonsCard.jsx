import { Text, Image, View } from "react-native";
import React from "react";

const ReasonsCard = ({ reasons }) => {
  return (
    <View className="max-w-[250px] rounded-2xl p-4 border border-gray_border">
      <View className={`item h-10 w-10 rounded-full`} style={{ backgroundColor: reasons.bgColor }}>
        <Image
          source={{ uri: reasons.icon }}
          className="h-6 w-6 m-auto"
          resizeMode="contain"
          tintColor={reasons.iconColor}
        />
      </View>

      <Text className="font-pblack text-xl mt-4">{reasons.text}</Text>
      <Text className="mt-2 font-pregular">{reasons.description}</Text>
    </View>
  );
};

export default ReasonsCard;
