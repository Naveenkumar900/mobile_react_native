import {View, Text, Button} from "react-native";
import { useState } from "react";
export function Jsxdemo(){
    const[count, setCount]=useState(0);
    let btn=<Button title="login"></Button>
    let menu=[<Button title="Home"></Button>,<Button title="Settings"></Button>,<Button title="Contact Us"></Button>]
    function inc(){
        setCount(count+1);
    }
    return(
    <View>
        <Text>Jsx Demo</Text>
        <Text style={{backgroundColor:"red"}}>{count}</Text>
        <Button title="click" onPress={inc}></Button>
        {btn}
        {menu}
    </View>
    )
}