import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';

const brands = [
  {
    id: '1',
    name: 'Ford',
    logo: 'https://logos-world.net/wp-content/uploads/2021/05/Ford-Logo.png',
  },
  {
    id: '2',
    name: 'Nissan',
    logo: 'https://i3.wp.com/di-uploads-pod18.dealerinspire.com/walsernissanburnsville/uploads/2019/07/maxresdefault.jpg',
  },
  {
    id: '3',
    name: 'Mitsubishi',
    logo: 'https://logos-world.net/wp-content/uploads/2021/09/Mitsubishi-Logo.png',
  },
  {
    id: '4',
    name: 'BMW',
    logo: 'https://blog.logomaster.ai/hs-fs/hubfs/bmw-logo-1963.jpg?width=672&height=454&name=bmw-logo-1963.jpg',
  },
  {
    id: '5',
    name: 'Toyota',
    logo: 'https://garethdavidstudio.com/blog/wp-content/uploads/2020/10/toyota_1989-1024x576.jpg',
  },
  {
    id: '6',
    name: 'Chevrolet',
    logo: 'https://1000logos.net/wp-content/uploads/2019/12/Chevrolet-logo.png',
  },
];

export default function List({ navigation, route }) {
  const [search, setSearch] = useState('');
  const { slot } = route.params || {}; // Get slot from navigation params

  const getSearch = (value) => {
    setSearch(value);
  };

  const selectedBrand = (brand) => {
    navigation.navigate('Model', { brand, slot }); // Pass brand and slot
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Search"
            onChangeText={getSearch}
            value={search}
            lightTheme
            round
            searchIcon={{ size: 24, containerStyle: styles.iconContainer }}
            clearIcon={{ size: 24, containerStyle: styles.clearContainer }}
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchBarInputContainer}
            inputStyle={styles.searchBarInput}
          />
        </View>
        <Text style={styles.headerSub}>Select A Brand</Text>
        <View style={styles.makerList}>
          {brands.filter(brand => brand.name.toLowerCase().includes(search.toLowerCase())).map((brand) => (
            <TouchableOpacity
              key={brand.id}
              style={styles.logoCard}
              onPress={() => selectedBrand(brand.name)} // Pass brand name
            >
              <Image source={{ uri: brand.logo }} style={styles.carLogo} resizeMode='contain' />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
      },
      container: {
        padding: 15,
        flexGrow: 1,
        justifyContent: 'flex-start',
      },
      searchContainer: {
        marginTop: 10,
        width: '100%',
      },
      searchBarContainer: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        padding: 0
      },
      searchBarInputContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderBottomWidth: 3,
        borderColor: '#000',
        borderRadius: 30,
        paddingRight: 10,
        flexDirection: 'row-reverse'
      },
      searchBarInput: {
        backgroundColor: '#fff',
        
      },
      iconContainer: {
        paddingRight: 10,
      },
      clearContainer: {
        paddingLeft: 10
      },
      headerSub: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold'
      },
    makerList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 20,
        justifyContent: 'space-evenly'
    },
    logoCard: {
        width: 150,
        marginHorizontal: 10,
        marginVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1.8,
      },
      carLogo: {
        aspectRatio: 1
      }
});