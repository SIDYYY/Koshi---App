import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Container from "../../components/Container";

const Search = () => {
  const { query } = useLocalSearchParams();
  return (
    <Container>
      <Text className="text-3xl">{query}</Text>
    </Container>
  );
};

export default Search;
