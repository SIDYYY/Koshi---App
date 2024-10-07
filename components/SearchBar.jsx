import { View, TextInput, Image } from "react-native";
import React, { forwardRef, useState } from "react";
import icons from "../constants/icons";

const SearchBar = forwardRef(
  ({ otherStyles, searchIcon = true, onChangeText, value }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
      <View
        className={`bg-white h-14 rounded-lg justify-center px-4 flex-row ${otherStyles} ${isFocused ? "border border-green" : ''}`}
      >
        <TextInput
          ref={ref}
          className="text-sm flex-1"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search..."
          placeholderTextColor="#9b9b9b"
          onChangeText={onChangeText}
          value={value}
        />
        {searchIcon ? (
          <Image
            source={icons.search}
            className="h-6 w-6 self-center"
            resizeMode="contain"
          />
        ) : (
          ""
        )}
      </View>
    );
  }
);

export default SearchBar;
