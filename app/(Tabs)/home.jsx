import React, { useRef } from "react";
import NewCars from "../../components/Home/NewCars";
import PopularBrands from "../../components/Home/PopularBrands";
import WhyKoshi from "../../components/Home/WhyKoshi";
import Container from "../../components/Container";
import Banner from "../../components/Home/Banner";
import SearchBar from "../../components/SearchBar";
import BodyType from "../../components/Home/BodyType";
import Contact from "../../components/Home/Contact";

const Home = () => {
    const inputRef = useRef(null);

    const dismissKeyboard = () => {
      Keyboard.dismiss(); // Hides the keyboard
      inputRef.current?.blur(); // Blurs the TextInput
    };
  return (
    <Container>
      <Banner />
      <SearchBar />
      <PopularBrands />
      <NewCars />
      <BodyType />
      <WhyKoshi />
      <Contact />
    </Container>
  );
};
export default Home;
