import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import icons from "../../constants/icons";
import { useUserContext } from "../../context/UserContext";

const ModelCarCard = ({ model, isShown, onPress, otherStyles }) => {
  const { color } = useUserContext();

  return (
    <View className={`items-center bg-white rounded-lg mb-2 ${otherStyles}`}>
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row relative"
        onPress={() => router.push("/variant")}
      >
        <Image
          source={{ uri: model.image }}
          className={`w-[120px] h-[80px] ${
            isShown ? "rounded-tl-lg" : "rounded-l-lg"
          }`}
          resizeMode="cover"
        />
        <View
          className={`mx-2 mb-2 flex-1 py-1 ${
            isShown ? "" : "justify-between"
          }`}
        >
          <Text className="font-black text-lg">{model.name}</Text>
          <Text className="text-gray">
            {model.variants ? model.variants.length : 1} Variants Available
          </Text>
        </View>
        <TouchableOpacity
          onPress={onPress}
          className={`justify-center bg-gray_inactive w-12 items-center ${
            isShown ? "rounded-tr-lg" : "rounded-r-lg"
          }`}
        >
          <Image
            source={icons.arrow}
            className={`h-4 w-4 -scale-[1] ${isShown ? "rotate-90" : ""}`}
            resizeMode="contain"
            tintColor={color.white_secondary}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      {isShown ? (
        <View className="flex-1 w-full p-4">
          <Text className="text-gray">
            Price Range:{" "}
            <Text className="text-green_primary font-bold">{model.price}</Text>
          </Text>
          <Text className="text-gray">
            Body Type: <Text className="font-bold">{model.bodyType}</Text>
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default ModelCarCard;
