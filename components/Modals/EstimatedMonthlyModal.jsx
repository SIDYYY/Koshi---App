import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

const LoanCalculatorModal = ({ visible, onClose, monthlyPayment }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center ">
        <View className="bg-white rounded-lg p-5 w-full border-gray-600 border-2">
          <Text className="text-lg font-pbold text-black mb-2">
            Estimated Monthly Payments
          </Text>
          <Text className="text-lg font-pbold text-black my-2">
            12 months: {" ₱ " + (monthlyPayment[12] || " ")}
          </Text>
          <Text className="text-lg font-pbold text-black my-2">
            24 months: {" ₱ " + (monthlyPayment[24] || " ")}
          </Text>
          <Text className="text-lg font-pbold text-black my-2">
            36 months: {" ₱ " + (monthlyPayment[36] || " ")}
          </Text>
          <Text className="text-lg font-pbold text-black my-2">
            48 months: {" ₱ " + (monthlyPayment[48] || " ")}
          </Text>

          <TouchableOpacity
            className="bg-green_primary p-2 rounded-lg mt-4"
            onPress={onClose} // Close modal
          >
            <Text className="text-white text-center">Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LoanCalculatorModal;
