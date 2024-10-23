import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { formatPrice } from "../../utils/price-format";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const FilteredCarCard = ({ car, index }) => {
  const price = car && formatPrice(car.price);
  const carId = car && car.id;
  const [isRendering, setIsRendering] = useState(true);
  return (
    <>
      {!car && !index ? (
        <View className="m-auto">
          <Text className="text-xl font-bold m-auto">No cars found</Text>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => router.push(`/car/${carId}`)}
          className={`flex-1 flex-row space-x-4 py-4 ${
            index != 0 && "border-t border-gray_border"
          }`}
        >
          <View className="relative">
            {isRendering && (
              <View className="absolute h-[80px] w-[80px] rounded-lg bg-gray_button_focused z-10" />
            )}
            <Image
              source={{ uri: car.image }}
              onLoad={() => setIsRendering(false)}
              className="h-[80px] w-[80px] rounded-lg"
            />
          </View>

          <View className="justify-center">
            <Text className="text-lg font-semibold">{car.name}</Text>
            <View className="flex-row items-center justify-center space-x-2  mt-2">
              <Text className="text-yellow_primary font-semibold">{price}</Text>
              <View className="h-1 w-1 bg-gray_inactive rounded-full" />
              <Text>Ford</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default FilteredCarCard;
