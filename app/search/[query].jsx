import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import Container from "../../components/Container";
import { useUserContext } from "../../context/UserContext";
import BackButtonHeader from "../../components/BackButtonHeader";
import { FlatList } from "react-native";
import FilteredCarCard from "../../components/SearchComponents/FilteredCarCard";
import ford from "../../lib/ford";
import SearchBar from "../../components/SearchBar";

const Search = () => {
  const { color } = useUserContext();
  const { query } = useLocalSearchParams();
  const [filteredData, setFilteredData] = useState(ford);
  const [value, setValue] = useState();
  useEffect(() => {
    handleSearch(query);
  }, []);

  // Function to filter data based on search term
  const handleSearch = (text) => {
    setValue(text);
    const filtered = ford.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <Container bg={color.white}>
      <BackButtonHeader title="Search" otherStyles="mb-4" />
      <SearchBar query={value} setQuery={handleSearch} />

      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          scrollEnabled={false}
          renderItem={({ item, index }) => (
            <FilteredCarCard car={item} index={index} />
          )}
          keyExtractor={(item) => item.name}
          className="border border-gray_border flex-grow-0 mt-6 rounded-2xl px-4"
        />
      ) : (
        <View className="border border-gray_border flex-grow mt-6 rounded-2xl px-4">
          <FilteredCarCard />
        </View>
      )}
    </Container>
  );
};

export default Search;
