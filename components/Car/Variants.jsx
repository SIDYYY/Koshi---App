import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import icons from "../../constants/icons";
import ContentContainer from "../ContentContainer";
import SpecHighlight from "./SpecHighlight";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Title from "../Title";
import { useUserContext } from "../../context/UserContext";

const Variants = ({ variant, isShown, onPress }) => {
  const [variantTier, setVariantTier] = useState("");
  const { color } = useUserContext();

  useEffect(() => {
    setVariantTier(variant.tier);
  }, [variantTier]);

  return (
    <View className={`mt-4`}>
      <Title
        title={`Tier ${variant.tier}`}
        more={false}
        otherStyles="text-gray -mt-4"
      />
      <ContentContainer>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPress}
          className={`flex-row items-center justify-between space-x-4`}
        >
          <View className="items-center space-y-2">
            <View
              className={`${
                isShown ? "bg-green_secondary" : "bg-gray_100"
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
            <Text className="text-green_primary">{variant.price}</Text>
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
                bg={color.red_icon_bg}
                title="Fuel Type"
                iconColor={color.red_primary}
              />
              <SpecHighlight
                icon={icons.seat}
                bg={color.orange_icon_bg}
                label={variant.capacity.seatingCapacity}
                title="Capacity"
                iconColor={color.orange_primary}
                otherStyles="border-x"
              />
              <SpecHighlight
                icon={icons.transmission}
                label={variant.transmission.type}
                bg={color.green_bg}
                title="Transmission"
                iconColor={color.green_secondary}
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
