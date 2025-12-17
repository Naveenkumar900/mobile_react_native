import React from 'react';
import {TextInput, View, Text} from "react-native";
import { useState } from "react";

export default function Currencycomp(){
    const [inr,setInr]=useState(0);
    return(
        <View>
            <TextInput placeholder="Enter Amount" onChangeText={setInr}/>
             <Text>USD:{inr*100}</Text>
        </View>
    )
}