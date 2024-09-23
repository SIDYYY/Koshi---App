import { View, Text } from 'react-native'
import React from 'react'
import icons from "../../constants/icons";

  const TabIcon = ({ name, focused }) => {
    return (
      <View
        className={`items-center justify-center gap-2 h-[90%] w-full ${
          focused ? "border-t-4 border-[#ECAE36]" : null
        }`}
      >
        <Text
          className={`${
            focused ? "font-black text-[#ECAE36]" : "font-normal text-[#9b9b9b]"
          } text-base uppercase`}
        >
          {name}
        </Text>
      </View>
    );
  };

export default TabIcon