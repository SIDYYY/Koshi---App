import { View, Text } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import { shadowDistance } from "../../lib/shadow-distance";
import { TouchableOpacity } from "react-native";

const VariantCard = ({ variant, isSelected, setIsClicked, value, setModalVisible }) => {

  return (
    <View className="items-center">
      <TouchableOpacity
        className="h-16 w-[330px] mb-4 relative"
        activeOpacity={0.7}
        onPress={() => {
          value === variant.variant
            ? setIsClicked("")
            : setIsClicked(variant.variant);
        }}
      >
        <Shadow
          className="w-[330px] h-16 rounded-md p-2"
          distance={shadowDistance}
        >
          <Text className="font-black text-base">{variant.variant}</Text>
          <Text className="text-[#3E9C35]">{variant.price}</Text>
        </Shadow>
        {isSelected ? (
          <View className="absolute w-full h-16 bg-black/20 items-center justify-center rounded-lg border-[#57AE78] border">
            <TouchableOpacity
              className="rounded-md bg-[#57AE78]"
              activeOpacity={0.7}
              onPress={() => setModalVisible(true)}
            >
              <Text className="px-4 py-2 text-white">Select This Variant</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </TouchableOpacity>

    </View>
  );
};

export default VariantCard;
