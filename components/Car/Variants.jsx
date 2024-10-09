import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import icons from "../../constants/icons";
import ContentContainer from "../ContentContainer";
import SpecHighlight from "./SpecHighlight";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Title from "../Title";

const Variants = ({ variant, isShown, onPress }) => {
  const [variantTier, setVariantTier] = useState('');
  useEffect(() => {
    setVariantTier(variant.tier);
  }, [variantTier]);

  return (
    <View className={`mt-4`}>
      <Title title={`Tier ${variant.tier}`} more={false} otherStyles="text-gray -mt-4" />
      <ContentContainer>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPress}
          className={`flex-row items-center justify-between space-x-4`}
        >
          <View className="items-center space-y-2">
            <View
              className={`${
                isShown ? "bg-light_green" : "bg-gray_100"
              } rounded-full h-10 w-10`}
            >
              <Image
                source={icons.variant}
                className="h-6 w-6 m-auto"
                tintColor={isShown ? "green" : "black"}
                resizeMode="contain"
              />
            </View>
          </View>

          <View className="flex-1">
            <Text className="text-base font-bold">{variant.variant}</Text>
            <Text className="text-green">{variant.price}</Text>
          </View>
          <Image
            source={icons.arrow}
            className={`w-6 h-6 -scale-[1] ${isShown ? "rotate-90" : ""}`}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {isShown ? (
          <View className="border-t border-light_grey_border mt-4">
            <View className="flex-row space-x-4 my-8 ">
              <SpecHighlight
                icon={icons.fuelType}
                label={variant.performance.fuelType}
                bg="#FFEBED"
                title="Fuel Type"
                iconColor="#F44435"
              />
              <SpecHighlight
                icon={icons.seat}
                bg="#FFF9C5"
                label={variant.capacity.seatingCapacity}
                title="Capacity"
                iconColor="#F57E16"
                otherStyles="border-x"
              />
              <SpecHighlight
                icon={icons.transmission}
                label={variant.transmission.type}
                bg="#E8F5E9"
                title="Transmission"
                iconColor="#439F48"
              />
            </View>
            <TouchableOpacity
              onPress={() => router.push(`car/variant/${variantTier}`)}
              className="flex-row border-light_grey_border px-2 border-t items-center space-x-4 pt-4 justify-between"
            >
              <Text className="font-bold">Full Details</Text>
              <Image
                source={icons.arrow}
                className="h-4 w-4 -scale-[1]"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        ) : (
          ""
        )}
      </ContentContainer>
    </View>
  );
};

export default Variants;
