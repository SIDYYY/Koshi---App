import { View, Text, Image } from 'react-native'
import React from 'react'
import { Shadow } from "react-native-shadow-2";
import { shadowDistance } from "../../lib/shadow-distance";

const ModelCarCard = ({model, otherStyles}) => {
  return (
    <View className={`items-center mb-4 ${otherStyles}`}>
      <Shadow
        className="h-[115px] min-w-[330px] max-w-[360px] flex-row rounded-lg"
        distance={shadowDistance}
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
      </Shadow>
    </View>
  );
}

export default ModelCarCard