import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import { Body } from './components/Body';
import { Comp1 } from './components/Comp1';
import Counter from './components/Counter';
import { Useeffectdemo } from './components/Useeffectdemo';
import { Axiosdemo } from './components/Axiosdemo';
import { Logindemopage } from './components/Logindemopage';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="Home" component={Comp1} />
        <Stack.Screen name="Counter" screenOptions={{headerShown: false, headerStyle: { backgroundColor: "tomato" }}} component={Counter} />
        <Stack.Screen name="Useeffectdemo" component={Useeffectdemo} />
        <Stack.Screen name="Axiosdemo" component={Axiosdemo} />
        <Stack.Screen name="Logindemopage" component={Logindemopage} />
        <Stack.Screen name="Body" component={Body} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 8 }
});
