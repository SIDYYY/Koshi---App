import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { carModels } from "../../components/CarLISTS";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Container from "../../components/Container";
import BackButtonHeader from "../../components/BackButtonHeader";
import SmallTitle from "../../components/Compare/SmallTitle";
import SearchBar from "../../components/SearchBar";
import ford from "../../lib/ford";

import ModelCarCard from "../../components/Compare/ModelCarCard";


const CarModel = () => {
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
    <Container>
      <BackButtonHeader title="Choose a Car for Comparison" />
      <SearchBar otherStyles="mx-4" />
      <SmallTitle text="Select a Model" previous="Brand" />

      <FlatList
        data={ford}
        contentContainerStyle={{ 
          paddingTop: 24
         }}
        renderItem={({ item }) => (
          <ModelCarCard model={item} />
        )}
        keyExtractor={(item) => item.name}
      />
    </Container>
    // <SafeAreaView style={styles.safeArea}>
    //   <ScrollView contentContainerStyle={styles.container}>
    //     <View style={styles.searchContainer}>
    //       <SearchBar
    //         placeholder="Search"
    //         onChangeText={getSearch}
    //         value={search}
    //         lightTheme
    //         round
    //         containerStyle={styles.searchBarContainer}
    //         inputContainerStyle={styles.searchBarInputContainer}
    //         inputStyle={styles.searchBarInput}
    //       />
    //     </View>
    //     <View style={styles.rowHead}>
    //       <Text style={styles.header}>Select A {brand} Car Model</Text>
    //       <TouchableOpacity style={styles.changeBrandButton} onPress={() => handleChangeBrand(slot)}>
    //         <View style={styles.rowChange}>
    //           <Text style={styles.changeBrandText}>Change Model</Text>
    //           <Ionicons name="swap-horizontal" size={20} color="#ECAE36" />
    //         </View>
    //       </TouchableOpacity>
    //     </View>
    //     <ScrollView contentContainerStyle={styles.scrollContainer}>
    //       {filteredModels.map((item) => (
    //         <TouchableOpacity
    //           key={item.model}
    //           style={styles.item}
    //           onPress={() => handleCarSelect(item,brand, slot)} // Pass model, brand, and slot to Variant page
    //         >
    //           <Image source={{ uri: item.image }} style={styles.image} />
    //           <View style={styles.modelInfo}>
    //             <Text style={styles.text}>{item.model} ({item.year})</Text>
    //             <Text style={styles.priceText}>Price:</Text>
    //             <Text style={styles.displayPrice}>{item.price}</Text>
    //             <View style={styles.rowFoot}>
    //               <Text style={styles.variants}>7 Variants & Specifications</Text>
    //               <Text style={styles.type}>Type: {item.type}</Text>
    //             </View>
    //           </View>
    //         </TouchableOpacity>
    //       ))}
    //     </ScrollView>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

export default CarModel;
