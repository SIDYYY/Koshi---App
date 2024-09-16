import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native'; 
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Variant = () => {
  const route = useRoute();
  const { model, brand, slot } = route.params; // Retrieve the passed brand and slot
  const navigation = useNavigation();

  const handleCarSelect = (car, slot, variant) => {
    console.log("Selected Car:", car);
    console.log("Selected Slot:", slot);
    console.log("Selected Variant:", variant);
    
    // Pass the selected variant as well when navigating
    navigation.navigate('Compare Car', { car: { ...car, variant }, slot });
};

  const handleChangeModel = (slot, brand) => {
    navigation.navigate('Model', { slot, brand }); // Ensure brand and slot are passed correctly back
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.rowHead}>
          <Text style={styles.headerTitle}>Model Chosen</Text>
          <TouchableOpacity style={styles.changeModelButton} onPress={() => handleChangeModel(slot, brand)}>
            <Text style={styles.changeModelText}>Change Model</Text>
            <Ionicons name="swap-horizontal" size={20} color="#ECAE36" />
          </TouchableOpacity>
        </View>
        <View style={styles.modelCard}>
          <Image source={{ uri: model.image }} style={styles.modelImage} />
          <View style={styles.modelRow}>
            <Text style={styles.modelTitle}>{model.model}</Text>
            <Text style={styles.modelPriceText}>Price</Text>
            <Text style={styles.modelPrice}>{model.price}</Text>
            <Text style={styles.modelText}>{model.variants.length} Variants & Specifications</Text>
            <Text style={styles.typeText}>Type: {model.type}</Text>
          </View>
        </View>
        <Text style={styles.variantsTitle}>Select A Variant:</Text>
        <View style={styles.variantSection}>
          <ScrollView>
            {model.variants.map((variant) => (
              <TouchableOpacity key={variant.id} style={styles.variantItem} onPress={() => handleCarSelect(model, slot, variant)}>
                <Text style={styles.variantName}>{variant.variant}</Text>
                <Text style={styles.variantPrice}>{variant.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
      },
      container: {
        padding: 20,
        flexGrow: 1,
        justifyContent: 'flex-start',
      },
  modelCard: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8
  },
  modelRow: {
    
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  rowHead: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 20
  },
  changeModelButton: {
    flexDirection: 'row',
    marginVertical: 4,
    marginLeft: 145
  },
  changeModelText: {
    color: '#ECAE36', 
    marginRight: 5
  },
  typeText: {
    color: '#ECAE36',
    fontSize: 13
  },
  modelImage: {
    width: 160,
    height: 50,
    borderRadius: 5,
    aspectRatio: 1.4,
    marginRight: 10
  },
  modelTitle: {
    fontSize: 18,
    width: 200,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modelPrice: {
    fontSize: 14,
    color: '#3E9C35',
  },
  modelText: {
    marginTop: 20,
    fontSize: 13
  },
  modelPriceText: {
    fontSize: 13,
    color: '#9B9B9B'
  },
  variantsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  variantItem: {
    flexDirection: 'column',
    paddingVertical: 10,
    borderWidth: 1,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingLeft: 15
  },
  variantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  variantPrice: {
    fontSize: 14,
    marginTop: 10,
    paddingTop: 10,
    color: '#3E9C35'
  },
});

export default Variant;