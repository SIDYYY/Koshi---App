import React, { useState } from "react";
import { FlatList } from "react-native";
import Container from "../../components/Container";
import BackButtonHeader from "../../components/BackButtonHeader";
import SearchBar from "../../components/SearchBar";
import ModelCarCard from "../../components/Compare/ModelCarCard";
import SmallTitle from "../../components/Compare/SmallTitle";
import everest from "../../lib/everest";
import VariantCard from "../../components/Compare/VariantCard";
import ConfirmSelectModal from '../../components/Compare/ConfirmSelectModal'

const Variant = () => {
  const [isClicked, setIsClicked] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  //   const route = useRoute();
  //   const { model, brand, slot } = route.params; // Retrieve the passed brand and slot
  //   const navigation = useNavigation();

  //   const handleCarSelect = (car, slot, variant) => {
  //     console.log("Selected Car:", car);
  //     console.log("Selected Slot:", slot);
  //     console.log("Selected Variant:", variant);

  //     // Pass the selected variant as well when navigating
  //     navigation.navigate('Compare', { car: { ...car, variant }, slot });
  // };

  // const handleChangeModel = (slot, brand) => {
  //   navigation.navigate('Model', { slot, brand }); // Ensure brand and slot are passed correctly back
  //   console.log('Changed Model (Slot# , BrandName)',slot,brand)
  // };

  const model = {
    variant: "2.0L Turbo Trend 4x2 AT",
    bodyType: "SUV",
    price: "₱ 1,829,000",
    image:
      "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/standard/next-gen-2023-ford-everest-62e21bcfe287e.jpg",
    bodyType: "SUV",
  };

    const fordEverest = {
      name: "Ford Everest",
      price: "₱ 1,829,000",
      variant: "2.0L Turbo Trend 4x2 AT",
      image:
        "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/standard/next-gen-2023-ford-everest-62e21bcfe287e.jpg",
      bodyType: "SUV",
    };

  return (
    <Container>
      <BackButtonHeader title="Choose a Car for Comparison" />
      <SearchBar otherStyles="mx-4" />
      <SmallTitle text="Model Chosen" previous="Model" />
      <ModelCarCard model={model} otherStyles="mt-4" />
      <SmallTitle text="Select A Variant" />
      <FlatList
        contentContainerStyle={{
          paddingTop: 24,
        }}
        data={everest}
        renderItem={({ item }) => (
          <VariantCard
            variant={item}
            setIsClicked={setIsClicked}
            isSelected={isClicked === item.variant}
            setModalVisible={setModalVisible}
            value={isClicked}
          />
        )}
        keyExtractor={(item) => item.variant}
      />
      <ConfirmSelectModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        carSelected={fordEverest}
      />
    </Container>
  );
};

export default Variant;
