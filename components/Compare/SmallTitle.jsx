import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const SmallTitle = ({ text, previous, px }) => {
  return (
    <View className={`flex-row mt-9 items-center justify-between ${px}`}>
      <Text className="font-pbold text-base">{text}</Text>
      <View>
        {previous ? (
          <TouchableOpacity
            className="flex-row items-center justify-end space-x-2"
            activeOpacity={0.7}
          >
            <Text className="text-sm font-pbold text-gray">
              Change {previous}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default SmallTitle;
