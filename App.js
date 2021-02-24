import React from 'react';
import MainNavigation from "./navigation/navigation"
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <MainNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
