import { View, TextInput, Image } from "react-native";
import React, { forwardRef, useState } from "react";
import icons from "../constants/icons";
import { router, usePathname } from "expo-router";
import { TouchableOpacity } from "react-native";

const SearchBar = forwardRef(
  ({ otherStyles, searchIcon = true, onChangeText, value }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const pathname = usePathname();
    const [query, setQuery] = useState("");
    return (
      <View
        className={`bg-white h-14 rounded-lg justify-center px-4 flex-row ${otherStyles} ${
          isFocused ? "border border-green" : ""
        }`}
      >
        <TextInput
          ref={ref}
          className="text-sm flex-1"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search..."
          placeholderTextColor="#9b9b9b"
          onChangeText={(text) => setQuery(text)}
          value={query}
        />
        {searchIcon ? (
          <TouchableOpacity
          className=""
            onPress={() => {
              if (!query) {
                return;
              }
              if (pathname.startsWith('/search')) {                
                router.setParams({query})                
              } else {
                router.push(`/search/${query}`)
              }
            }}
          >
            <Image
              source={icons.search}
              className="h-6 w-6 my-auto"
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          ""
        )}
      </View>
    );
  }
);

export default SearchBar;
