import { View, TextInput, Image } from 'react-native'
import React from 'react'
import icons from "../constants/icons";

const SearchBar = () => {
  return (
    <View className="border mx-4 border-[#9b9b9b] mt-8 h-14 rounded-full justify-center px-4 flex-row">
      <TextInput
        className="text-sm flex-1"
        placeholder="Search..."
        placeholderTextColor="#9b9b9b"
      />
      <Image
        source={icons.search}
        className="h-6 w-6 self-center"
        resizeMode="contain"
      />
    </View>
  );
}

export default SearchBar