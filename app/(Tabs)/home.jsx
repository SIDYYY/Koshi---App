import React from "react";
import NewCars from "../../components/Home/NewCars";
import BrandAndBodyType from "../../components/Home/BrandAndBodyType";
import WhyKoshi from "../../components/Home/WhyKoshi";
import Container from "../../components/Container";
import LocationHeader from "../../components/Home/LocationHeader";
import Banner from "../../components/Home/Banner";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <Container scroll={true}>
      <LocationHeader />
      <Banner />
      <SearchBar />
      <BrandAndBodyType />
      <NewCars />
      <WhyKoshi />
    </Container>
  );
}
export default Home;
