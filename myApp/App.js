import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import Currencycomp from './components/Currencycomp';
import { Body } from './components/Body';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Body/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
});
