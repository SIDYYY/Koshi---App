import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import Container from "../../components/Container";
import BackButtonHeader from "../../components/BackButtonHeader";
import SearchBar from "../../components/SearchBar";
import ford from "../../lib/ford";
import FilteredCarCard from "../../components/SearchComponents/FilteredCarCard";
import { useUserContext } from "../../context/UserContext";

const BestBuy = () => {
  const { color } = useUserContext();

  const [filteredData, setFilteredData] = useState(ford);
  const [query, setQuery] = useState("");

  // Function to filter data based on search term
  const handleSearch = (text) => {
    setQuery(text);
    const filtered = ford.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <Container bg={color.white}>
      <BackButtonHeader title="Search" otherStyles="mb-4" />
      <SearchBar query={query} setQuery={handleSearch} />

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
        // Show message if no results
      )}
    </Container>
  );
};

export default BestBuy;
