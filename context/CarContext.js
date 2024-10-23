import { createContext, useContext, useState, useEffect } from "react";
import ford from "../lib/ford";

const GlobalContext = createContext();

export const useCarContext = () => useContext(GlobalContext);

const CarContext = ({ children }) => {
  const [Id, setId] = useState(null); // Initialize as null instead of an empty string
  const [car, setCar] = useState(null); // Initialize as null instead of an empty string
  const [variants, setVariants] = useState(null);
  const [variant, setVariant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCarById = (Id) => {
      // Simulating a delay to showcase the loading state
      setTimeout(() => {
        const foundCar = ford.find((car) => car.id === Number(Id));
        setCar(foundCar);
        setVariants(foundCar.variants);
        setIsLoading(false);
      }, 1000); // Simulate 1 second delay
    };

    if (Id) {
      getCarById(Id);
    }
  }, [Id, isLoading]);

  return (
    <GlobalContext.Provider
      value={{
        Id,
        setId,
        car,
        setCar,
        variants,
        setVariants,
        variant,
        setVariant,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default CarContext;
