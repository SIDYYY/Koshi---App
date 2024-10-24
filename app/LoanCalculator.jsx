import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import Container from "../components/Container";
import LoanCalculatorModal from "../components/Modals/EstimatedMonthlyModal";

export default function CarLoanCalculator() {
  const [carPrice, setCarPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState({});
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const interest = 5;

  const calculateLoan = () => {
    const principal = parseFloat(carPrice) - parseFloat(downPayment);
    const monthlyInterestRate = interest / 100 / 12;

    const loanTerms = [12, 24, 36, 48]; // Different loan terms
    const payments = {};

    loanTerms.forEach((term) => {
      if (monthlyInterestRate === 0) {
        const payment = principal / term;
        payments[term] = payment.toFixed(2);
      } else {
        const payment =
          (principal *
            (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, term))) /
          (Math.pow(1 + monthlyInterestRate, term) - 1);
        payments[term] = payment.toFixed(2);
      }
    });

    setMonthlyPayment(payments);
    setModalVisible(true); // Show the modal after calculations
  };

  return (
    <Container>
      <Text className="text-2xl font-pbold text-black text-center my-16">
        Car Loan Calculator
      </Text>

      <Text className="text-lg text-black mt-2">Unit Price</Text>
      <TextInput
        className="bg-white text-black rounded-lg p-4 my-2 text-lg"
        placeholder="Car Price"
        keyboardType="numeric"
        value={carPrice}
        onChangeText={setCarPrice}
      />
      <Text className="text-lg text-black mt-2">Downpayment</Text>
      <TextInput
        className="bg-white text-black rounded-lg p-4 my-2 text-lg"
        placeholder="Down Payment"
        keyboardType="numeric"
        value={downPayment}
        onChangeText={setDownPayment}
      />

      <TouchableOpacity
        className="bg-green_primary p-4 rounded-lg my-5"
        onPress={calculateLoan}
      >
        <Text className="text-white text-lg font-pbold text-center">
          Calculate
        </Text>
      </TouchableOpacity>

      {/* Modal for estimated monthly payments */}
      <LoanCalculatorModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)} // Close modal
        monthlyPayment={monthlyPayment}
      />
    </Container>
  );
}
