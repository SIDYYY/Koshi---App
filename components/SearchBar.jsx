import { View, TextInput, Image } from 'react-native'
import React from 'react'
import icons from "../constants/icons";

const SearchBar = ({otherStyles}) => {
  return (
    <View
      className={`bg-white h-14 rounded-lg justify-center px-4 flex-row ${otherStyles}`}
    >
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