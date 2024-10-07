import { View, Text, FlatList, Image } from "react-native";
import React, { useState } from "react";
import Container from "../../components/Container";
import BackButtonHeader from "../../components/BackButtonHeader";
import SearchBar from "../../components/SearchBar";
import ford from "../../lib/ford";
import icons from "../../constants/icons";
import FilteredCarCard from "../../components/SearchComponents/FilteredCarCard";

const BestBuy = () => {
  const [filteredData, setFilteredData] = useState(ford);
  const [query, setQuery] = useState("");

  // Function to filter data based on search term
  const handleSearch = (text) => {
    setQuery(text);
    const filtered = ford.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    console.log(filtered);
    
    setFilteredData(filtered);
  };
  return (
    <Container>
      <BackButtonHeader title="Search" otherStyles="mb-4" />
      <SearchBar query={query} setQuery={handleSearch} />
      <View className="mt-4 bg-white p-4 rounded-lg">
        <Text className="text-base text-gray">Search Results for:</Text>
        <Text className="font-black text-xl">{`"${query ? query : "Nothing"}"`}</Text>
      </View>
      <View className="bg-white p-4 mt-4 flex-1 rounded-lg">
        <View className="">
          <FlatList
            data={["All", "Popular", "Latest"]}
            horizontal={true}
            renderItem={({ item }) => (
              <View>
                <Text className="text-base font-bold px-3 border-b-2 border-green">
                  {item}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item}
            contentContainerStyle={{
              gap: 16,
            }}
          />
          <FlatList
            data={filteredData}
            scrollEnabled={false}
            renderItem={({ item }) => <FilteredCarCard car={item} />}
            keyExtractor={(item) => item.name}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between", gap: 16 }}
            contentContainerStyle={{ gap: 16, marginTop: 16 }}
          />
        </View>
      </View>
    </Container>
  );
};

export default BestBuy;
