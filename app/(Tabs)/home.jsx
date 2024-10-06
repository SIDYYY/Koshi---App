import React from "react";
import NewCars from "../../components/Home/NewCars";
import PopularBrands from "../../components/Home/PopularBrands";
import WhyKoshi from "../../components/Home/WhyKoshi";
import Container from "../../components/Container";
import LocationHeader from "../../components/Home/LocationHeader";
import Banner from "../../components/Home/Banner";
import SearchBar from "../../components/SearchBar";
import { Text, View, Image } from "react-native";

const Home = () => {
  return (
    <Container scroll={true}>
      <View className="mb-8">
        <View className="flex-row items-center space-x-4">
          <View className="w-14 h-14 bg-[#9b9b9b] rounded-full" />
          <View className="">
            <Text className="text-lg font-bold">Samm Caagbay</Text>
          </View>
          <Image  />
        </View>
      </View>
      {/* <LocationHeader /> */}
      <SearchBar />
      <PopularBrands />
      <NewCars />
      <WhyKoshi />
    </Container>
  );
};
export default Home;
