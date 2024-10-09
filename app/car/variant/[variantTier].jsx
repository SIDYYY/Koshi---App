import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import Container from "../../../components/Container";
import { useCarContext } from "../../../context/CarContext";

const VariantSpecs = () => {
  const { variantTier } = useLocalSearchParams();
  const { isLoading, setIsLoading, variants, setVariant, variant } =
    useCarContext();

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
    }
    const foundVariant = variants.find(
      (variant) => variant.tier == variantTier
    );
    setVariant(foundVariant);
  }, [variant]);

  if (isLoading) {
    return (
      <Container>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={{ marginTop: 10 }}>Loading variant details...</Text>
        </View>
      </Container>
    );
  }

  if (!variant) {
    return (
      <Container>
        <Text>No variant found for the specified tier.</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Text>Variant Details: {variant.variant}</Text>
      {/* Render more details about the variant here */}
    </Container>
  );
};

export default VariantSpecs;
