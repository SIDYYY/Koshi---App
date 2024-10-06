import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const SmallTitle = ({ text, previous}) => {
  return (
    <View className="flex-row mt-9 items-center justify-between">
      <Text className="font-bold text-base">{text}</Text>
      <View>
        {previous ? (
          <TouchableOpacity
            className="flex-row items-center justify-end space-x-2"
            activeOpacity={0.7}
          >
            <Text className="text-sm font-bold text-gray">
              Change {previous}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default SmallTitle;
