import React from "react";
import NewCars from "../../components/Home/NewCars";
import BrandAndBodyType from "../../components/Home/BrandAndBodyType";
import Why from "../../components/Home/WhyKOSHI";
import CustomContainer from "../../components/Container";
import LocationHeader from "../../components/Home/LocationHeader";
import Banner from "../../components/Home/Banner";
import SearchBar from "../../components/SearchBar";

export default function HomePage() {
  return (
    <CustomContainer scroll={true}>
      <LocationHeader />
      <Banner />
      <SearchBar otherStyles="" />
      <NewCars />
      <BrandAndBodyType />
      <Why />
    </CustomContainer>
  );
}
