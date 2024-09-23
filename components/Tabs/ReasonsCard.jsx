import { View, Text, Image } from 'react-native'
import React from 'react'
import { Shadow } from 'react-native-shadow-2'
import { shadowDistance } from '../../lib/shadow-distance';

const ReasonsCard = ({reasons}) => {
  return (
    <Shadow className="max-w-[250px] rounded-lg p-4" distance={shadowDistance}>
      <Image
        source={{ uri: reasons.icon }}
        className="h-10 w-10"
        resizeMode="contain"
        tintColor="#ECAE36"
      />
      <Text className="font-black text-xl mt-4">{reasons.text}</Text>
      <Text className="mt-2">{reasons.description}</Text>
    </Shadow>
  );
}

export default ReasonsCard