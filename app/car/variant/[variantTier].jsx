import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import Container from "../../../components/Container";
import { useCarContext } from "../../../context/CarContext";
import CarHeader from "../../../components/Car/CarHeader";
import Title from "../../../components/Title";
import SpecHighlight from "../../../components/Car/SpecHighlight";
import ContentContainer from "../../../components/ContentContainer";
import icons from "../../../constants/icons";
import SpecsInfo from "../../../components/Car/Variant/SpecsInfo";

const VariantSpecs = () => {
  const { variantTier, color } = useLocalSearchParams();
  const { isLoading, setIsLoading, variants, setVariant, variant, car } =
    useCarContext();

  useEffect(() => {
    if (isLoading === false) {
      setIsLoading(true);
    }
    const foundVariant = variants.find(
      (variant) => variant.tier == variantTier
    );
    setVariant(foundVariant);
  }, [variant]);

  if (isLoading || !variant) {
    return (
      <Container>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={{ marginTop: 10 }}>Loading variant details...</Text>
        </View>
      </Container>
    );
  }

  return (
    <CarHeader carImage={car.image} backButtonTitle="Car Variant Details">
      <Text className="font-black text-xl mt-8 -mb-6">{variant.variant}</Text>
      <Title title={car.name} more={false} px="px-0" otherStyles="text-gray" />
      <ContentContainer ph={false} otherStyles="mt-6">
        <View className="flex-row space-x-4">
          <SpecHighlight
            icon={icons.fuelType}
            label={variant.performance.fuelType}
            bg={color.red_icon_bg}
            title="Fuel Type"
            iconColor="#F44435"
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
      </ContentContainer>
      <ContentContainer>
        <Title title="Dimensions" more={false} px={false} mt={false} />
        <SpecsInfo
          title="Front Tread"
          content={variant.dimensions.frontTread}
        />
        <SpecsInfo title="Rear Tread" content={variant.dimensions.rearTread} />
        <SpecsInfo title="Length" content={variant.dimensions.length} />
        <SpecsInfo title="Width" content={variant.dimensions.width} />
        <SpecsInfo title="Height" content={variant.dimensions.height} />
        <SpecsInfo title="Wheel Base" content={variant.dimensions.wheelBase} />
        <SpecsInfo
          title="Number of Doors"
          content={variant.dimensions.numberOfDoors}
        />
      </ContentContainer>
    </CarHeader>
  );
};

export default VariantSpecs;
