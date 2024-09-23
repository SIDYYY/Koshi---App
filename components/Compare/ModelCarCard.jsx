import { View, Text, Image } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import { shadowDistance } from "../../lib/shadow-distance";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const ModelCarCard = ({
  model,
  isSelected,
  setIsClicked,
  value,
  clickable = false,
  otherStyles,
}) => {
  return (
    <View className={`items-center mb-4 ${otherStyles}`}>
      <Shadow className=" rounded-lg " distance={shadowDistance}>
        <TouchableOpacity
          activeOpacity={0.7}
          className="h-[115px] min-w-[330px] max-w-[360px] flex-row relative"
          onPress={clickable ? () => {
            value === model.name ? setIsClicked("") : setIsClicked(model.name);
          } : null}
        >
          <Image
            source={{ uri: model.image }}
            className="h-full w-[140px] rounded-l-lg"
            resizeMode="cover"
          />
          <View className="mx-2 mb-2 justify-between">
            <View>
              <Text className="font-black text-base">{model.name}</Text>
              <Text className="text-xs text-[#ECAE36]">{model.bodyType}</Text>
              <Text className="text-xs text-[#9b9b9b] mt-2">Price Range:</Text>
              <Text className="text-[#3E9C35]">{model.price}</Text>
            </View>
            <Text className="text-xs text-[#9b9b9b]">
              {model.variants} Variants Available
            </Text>
          </View>
          {isSelected ? (
            <View className="absolute w-full h-full bg-black/20 items-center justify-center rounded-lg border-[#57AE78] border">
              <TouchableOpacity
                className="rounded-md bg-[#57AE78]"
                activeOpacity={0.7}
                onPress={() => {
                  router.push("/variant");
                  setIsClicked("");
                }}
              >
                <Text className="px-4 py-2 text-white">Select This Model</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </TouchableOpacity>
      </Shadow>
    </View>
  );
};

export default ModelCarCard;
