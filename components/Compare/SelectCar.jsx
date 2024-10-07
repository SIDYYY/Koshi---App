import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import icons from "../../constants/icons";
import { router } from "expo-router";

const SelectCar = ({ car }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => router.push("/brand")}
      className="space-y-4 p-9 rounded-lg bg-white"
    >
      {car ? (
        <Image source={{ uri: car.image }} style={styles.carImage} />
      ) : (
        <Image
          source={icons.plus1}
          className="w-20 h-20"
          tintColor="#5CB88F"
          resizeMode="contain"
        />
      )}
      <Text>{car ? car.model : "Select Car 1"}</Text>
    </TouchableOpacity>
  );
};

export default SelectCar;
