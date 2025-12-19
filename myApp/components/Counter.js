import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Simple Counter: just tracks count and exposes + / - buttons
const Counter = ({ initial = 0 },route) => {
  const [count, setCount] = useState(initial);

  return (
    <View style={styles.container}>
      <Button title="-" onPress={() => setCount(c => c - 1)} accessibilityLabel="decrease" />
      <Text style={styles.count}>{count}</Text>
      <Button title="+" onPress={() => setCount(c => c + 1)} accessibilityLabel="increase" />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    marginHorizontal: 16,
    fontSize: 20,
    fontWeight: '600',
  },
});
