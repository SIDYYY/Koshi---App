import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { SearchBar } from 'react-native-elements';
import Container from "../../components/Container";
import { useNavigation } from '@react-navigation/native';
import { carModels } from '../../components/CarLISTS'

const FindCars = () => {
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false); 
  const [filterType, setFilterType] = useState('All'); // for car type filter
  const [minPrice, setMinPrice] = useState(0); // Min price 
  const [maxPrice, setMaxPrice] = useState(Infinity); // Max price 
  const [filteredCarModels, setFilteredCarModels] = useState(Object.values(carModels).flat());
  const navigation = useNavigation(); 

  // select drop down list
  const [type, setType] = useState([ 
    {value: 'All'},
    {value: 'Coupe'},
    {value: 'SUV'},
    {value: 'Pickup Truck'}
  ]);

  const allCarModels = Object.values(carModels).flat();

  // Filter car models based on search input/type/price
  const applyFilters = () => {
    const filtered = allCarModels.filter((carModel) => {
      const matchesSearch = carModel.model.toLowerCase().includes(search.toLowerCase());
      const matchesType = filterType === 'All' || carModel.type === filterType;
      const matchesPrice = carModel.price >= minPrice && carModel.price <= maxPrice;

      return matchesSearch && matchesType && matchesPrice;
    });
    
    setFilteredCarModels(filtered);
    setShowFilters(false); 
    console.log('Filters applied:', { filterType, minPrice, maxPrice });
  };

  const getSearch = (value) => {
    setSearch(value);
    console.log(value);
  };

  const handleCarSelect = (carModel) => {
    navigation.navigate('Details', { carModel });
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters); // Toggle filter visibility
  };

  const clearFilters = () => {
    setSearch('');
    setFilterType('All');
    setMinPrice(0);
    setMaxPrice(Infinity);
    setShowFilters(false); 
    setFilteredCarModels(Object.values(carModels).flat()); 
    console.log('Filters cleared');
  };

  return (
    <Container>
        {/* Search bar */}
        <View className='mb-2.5'>
          <SearchBar
            placeholder="Search for a car model"
            onChangeText={getSearch}
            value={search}
            lightTheme
            round
            containerStyle={{ backgroundColor: 'transparent', borderTopColor: 'transparent', borderBottomColor: 'transparent', padding: 0 }}
            inputContainerStyle={{backgroundColor: 'white'}}
            searchIcon={{ size: 24, color: 'black'}}
            inputStyle className='bg-white rounded-r-2xl'
          />
        </View>

        {/* Filter Button Section */}
        <TouchableOpacity className='bg-green_primary p-2.5 rounded-3xl text-center my-3 w-32' onPress={toggleFilters}>
          <Text className='text-white font-bold text-xl text-center'>{showFilters ? 'Hide Filters' : 'Show Filters'}</Text>
        </TouchableOpacity>

        {/* Filter Section */}
        
        {showFilters && (
          <View className='my-1.5 '>
            <Text className='my-2'>Filter by type:</Text>
            <SelectList
              setSelected={setFilterType}
              data={type}
              placeholder="Select Car Type"
              defaultOption={{ value: 'Select Car Type' }}
              boxStyles={{ borderColor: '#ccc' }}
              dropdownStyles={{
                backgroundColor: '#fff', // Set a solid white background
                borderColor: '#ccc',
                borderWidth: 1, // Ensure there is a border for better visibility
                borderRadius: 5, // Optional: rounds the corners for a better look
              }}
            />
            <Text className='my-2'>Min Price:</Text>
            <TextInput
              className='border border-[#ccc] rounded-md p-2 mb-2.5'
              keyboardType="numeric"
              placeholder="Minimum"
              onChangeText={(value) => setMinPrice(Number(value))}
              value={minPrice.toString()}
            />
            <Text className='my-2'>Max Price:</Text>
            <TextInput
              className='border border-[#ccc] rounded-md p-2 mb-2.5'
              keyboardType="numeric"
              placeholder="0"
              onChangeText={(value) => setMaxPrice(Number(value))}
              value={maxPrice === Infinity ? '' : maxPrice.toString()}
            />
            <TouchableOpacity className='bg-red-500 p-2 rounded-md mt-2' onPress={clearFilters}>
              <Text className='text-white text-center'>Clear Filters</Text>
            </TouchableOpacity>

            <TouchableOpacity className='bg-green_primary p-2 rounded-md mt-3' onPress={applyFilters}>
            <Text className='text-white text-center'>Filter Car</Text>
            </TouchableOpacity>
          </View>
        )}


        <Text className='my-5 text-xl font-bold'>Result</Text>

        {/* Display Section */}
        <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }} className='pb-5 fixed'>
          {filteredCarModels.length > 0 ? (
            filteredCarModels.map((carModel) => (
              <TouchableOpacity
                key={carModel.id}
                className='bg-white flex flex-row items-center mb-4 rounded-lg shadow-md p-2 w-full'
                onPress={() => handleCarSelect(carModel)}
              >
                <Image source={{ uri: carModel.image }} className='w-11 mr-5 rounded-lg' />
                <View className='my-2.5 flex-1'>
                  <Text className='text-xl font-bold flex-wrap w-52'>{carModel.model} ({carModel.year})</Text>
                  <Text className='mt-2.5 text-base text-[#9B9B9B]'>Price:</Text>
                  <Text className='text-[#3E9C35] text-base'>Php {carModel.price.toLocaleString()}</Text>
                  <View className='flex-col w-full'>
                    <Text className='mt-2.5 text-[#9B9B9B] text-base'>{carModel.variants.length} Variants</Text>
                    <Text className='text-[#ECAE36] text-base'>Type: {carModel.type}</Text>
                  </View>
                  <TouchableOpacity className='mt-3 border-2 p-2.5 w-full rounded-xl border-[#101820]' onPress={() => handleCarSelect(carModel)}>
                    <Text className='text-sm font-bold text-center'>View Detail</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text className='text-lg mt-5'>No car model found</Text>
          )}
        </ScrollView>

      </Container>
  );
};

export default FindCars;
