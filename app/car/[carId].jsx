import { View, Text, ActivityIndicator, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import Container from "../../components/Container";
import ford from "../../lib/ford";
import BackButtonHeader from "../../components/BackButtonHeader";
import ContentContainer from "../../components/ContentContainer";
import Title from "../../components/Title";
import { BlurView } from "expo-blur";
import icons from "../../constants/icons";
import SpecHighlight from "../../components/Car/SpecHighlight";
import Pill from "../../components/Pill";
import Variants from "../../components/Car/Variants";
import { useCarContext } from "../../context/CarContext";
import CarHeader from "../../components/Car/CarHeader";
const Car = () => {
  const { carId, color } = useLocalSearchParams();
  const { isLoading, setIsLoading, setId, variants, car } = useCarContext();
  const [showCardByTier, setShowCardByTier] = useState("1");

  useEffect(() => {
    setId(carId);
    if (!isLoading) {
      setIsLoading(true);
    }
  }, []);

  if (isLoading) {
    // Render the isLoading state
    return (
      <Container pb={false}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={{ marginTop: 10 }}>Loading car details...</Text>
        </View>
      </Container>
    );
  }

  return (
    <CarHeader carImage={car.image} backButtonTitle="Car Details">
      <Text className="font-pblack text-3xl mt-8">{car.name}</Text>
      <Title title="Car Overview" more={false} />
      <ContentContainer otherStyles="space-y-3">
        <View className="">
          <Text className="">Price Range:</Text>
          <Pill label={car.price} textOnly={false} />
        </View>
        <View className="">
          <Text className="">Body Type:</Text>
          <Pill label={car.bodyType} textOnly={false} />
        </View>
        <View className="">
          <Text className="">Transmission:</Text>
          <View className="flex-row ml-4 mt-2">
            <Pill label="Gasoline" otherStyles="mr-4" />
            <Pill label="Diesel" />
          </View>
        </View>
      </ContentContainer>
      <Title title="Variants Available" more={false} otherStyles="" />
      <FlatList
        data={variants}
        renderItem={({ item }) => (
          <Variants
            variant={item}
            isShown={showCardByTier === item.tier}
            onPress={() =>
              setShowCardByTier(showCardByTier === item.tier ? null : item.tier)
            }
          />
        )}
        scrollEnabled={false}
        keyExtractor={(item) => item.tier}
      />
    </CarHeader>
  );
};

export default Car;
