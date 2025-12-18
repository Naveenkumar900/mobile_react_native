import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import Currencycomp from './components/Currencycomp';
import { Body } from './components/Body';
import { Jsxdemo } from './components/Jsxdemo';
import { Imagedemo } from './components/Imagedemo';
import { Pressabledemo } from './components/Pressabledemo';
import { Touchabledemo } from './components/Touchabledemo';
import { Stylesdemo } from './components/Stylesdemo';
import { Flexdemo } from './components/Flexdemo';
import { Logindemopage } from './components/Logindemopage';
import { Listdemo } from './components/Listdemo';
import { Flatlistdemo } from './components/Flatlistdemo';
import { Product } from './components/Product';

export default function App() {
  return (
    <View style={styles.container}>
      
         <Product/>
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
