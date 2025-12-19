import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, Platform} from 'react-native';
import {useState} from "react";
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
import { Useeffectdemo } from './components/Useeffectdemo';
import { Axiosdemo } from './components/Axiosdemo';
import { Platformdemo } from './components/Platformdemo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [isvisible,setIsvisible]=useState(true);
  const Tab= createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ 
          headerShown: true,
           headerStyle: { backgroundColor: 'cadetblue' },
            headerTitleStyle: { fontWeight: 'bold' },
             tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray',
              tabBarStyle: { backgroundColor: 'cyan' } ,
              tabBarIcon:()=><MaterialIcons name="home" size={24} color={"black"} />
              }}> 
          <Tab.Screen name="Home" component={Product} />
          <Tab.Screen name="Listdemo" component={Listdemo} /> 
          <Tab.Screen name="Useeffectdemo" component={Useeffectdemo} />
          <Tab.Screen screenOptions={{
            tabBarIcon:()=><MaterialIcons name='login' size={24} color={"black"} />
          }}name="Logindemopage" component={Logindemopage} />
        </Tab.Navigator>
      </NavigationContainer>
      
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
});
