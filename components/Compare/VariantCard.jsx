import { View, Text } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import { shadowDistance } from "../../lib/shadow-distance";
import { TouchableOpacity } from "react-native";

const VariantCard = ({
  variant,
  isSelected,
  setIsClicked,
  value,
  setModalVisible,
}) => {
  return (
    <View className="items-center">
      <TouchableOpacity
        className="h-16 w-[330px] mb-4 relative"
        activeOpacity={0.7}
        onPress={() => setModalVisible(true)}
      >
        <View className="w-[330px] h-16 rounded-md p-2 bg-white">
          <Text className="font-black text-base">{variant.variant}</Text>
          <Text className="text-[#3E9C35]">{variant.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default VariantCard;
