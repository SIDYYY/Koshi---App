import { View, Text } from "react-native";
import React from "react";
import { useUserContext } from "../../context/UserContext";

const brands = () => {
  const { color } = useUserContext();
  return (
    <View>
      <Text>brands</Text>
    </View>
  );
};

export default brands;
