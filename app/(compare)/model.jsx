import React, { useState } from "react";
import { FlatList, View } from "react-native";
import Container from "../../components/Container";
import BackButtonHeader from "../../components/BackButtonHeader";
import SmallTitle from "../../components/Compare/SmallTitle";
import SearchBar from "../../components/SearchBar";
import ford from "../../lib/ford";

import ModelCarCard from "../../components/Compare/ModelCarCard";

const CarModel = () => {
  const [showCardById, setShowCardById] = useState(1);

  // const { brand, slot } = route?.params || {};
  // const models = carModels[brand] || [];
  // const [search, setSearch] = useState('');
  // const navigation = useNavigation();

  // const getSearch = (value) => {
  //   setSearch(value);
  // };

  // const handleCarSelect = (model,brand, slot) => {
  //   navigation.navigate('Variant', { model,brand, slot }); // Pass model, brand, and slot
  // };

  // const handleChangeBrand = (slot) => {
  //   navigation.navigate('List', { slot }); // Navigate back to brand selection
  // };

  // const filteredModels = models.filter(item =>
  //   item.model.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <Container pb={false}>
      <BackButtonHeader title="Choose a Car for Comparison" />
      <SearchBar otherStyles="mt-6" />
      <SmallTitle text="Select a Model" previous="Brand" />
      <FlatList
        data={ford}
        contentContainerStyle={{
          paddingTop: 24,
        }}
        renderItem={({ item }) => (
          <ModelCarCard
            model={item}
            isShown={showCardById === item.id}
            onPress={() =>
              setShowCardById(showCardById === item.id ? null : item.id)
            }
          />
        )}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </Container>
  );
};

export default CarModel;
