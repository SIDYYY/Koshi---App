import { View, Text } from 'react-native'
import React from 'react'
import { Shadow } from 'react-native-shadow-2';
import { shadowDistance } from '../../lib/shadow-distance';

const VariantCard = ({variant}) => {
  return (
    <View className="">
      <View className="h-16 items-center mb-4">
        <Shadow className="w-[330px] rounded-md p-2" distance={shadowDistance}>
          <Text className="font-black text-base">{variant.variant}</Text>
          <Text className="text-[#3E9C35]">{variant.price}</Text>
        </Shadow>
      </View>
    </View>
  );
}

export default VariantCard