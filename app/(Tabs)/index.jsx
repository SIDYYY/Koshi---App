import React from 'react';
import { Image, StyleSheet, Platform, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from '../../components/Home';
export default function Index({}) {
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <Home />
    </React.Suspense>
  );
}

const styles = StyleSheet.create({
    text: {
      color: '#fff'
    }
})
