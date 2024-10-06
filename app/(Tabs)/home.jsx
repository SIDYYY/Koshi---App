import React from "react";
import NewCars from "../../components/Home/NewCars";
import PopularBrands from "../../components/Home/PopularBrands";
import WhyKoshi from "../../components/Home/WhyKoshi";
import Container from "../../components/Container";
import Banner from "../../components/Home/Banner";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <Container>
      <Banner />
      <SearchBar />
      <PopularBrands />
      <NewCars />
      <WhyKoshi />
    </Container>
  );
};
export default Home;
