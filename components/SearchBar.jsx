import { View, TextInput, Image } from "react-native";
import React, { forwardRef, useEffect, useState } from "react";
import icons from "../constants/icons";
import { router, usePathname } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useUserContext } from "../context/UserContext";

const SearchBar = forwardRef(
  ({ otherStyles, searchIcon = true, query, setQuery }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const pathname = usePathname();
    const { color } = useUserContext();

    return (
      <View
        className={`bg-white h-14 rounded-lg justify-center px-4 flex-row relative ${otherStyles} ${
          isFocused ? "border border-green_primary" : ""
        }`}
      >
        <TextInput
          ref={ref}
          className="text-sm flex-1"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search..."
          placeholderTextColor={color.gray_inactive}
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
              if (pathname.startsWith("/search")) {
                router.setParams({ query });
              } else {
                router.push(`/search/${query}`);
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
