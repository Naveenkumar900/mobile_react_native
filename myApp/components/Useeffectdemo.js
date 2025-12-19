import { useState,useEffect } from "react";
import {View, Text, Button} from "react-native";
export function Useeffectdemo(){
    const [count,setCount]=useState(0);
    const [name,setName]=useState("John");
    useEffect(()=>{
        console.log("use effect called each time when component renders");
        //alert("use effect called");
    });
    useEffect(()=>{
        console.log("use effect called only once when component renders for the first time");
        //alert("use effect called only once");
    },[]);
    useEffect(()=>{
        console.log("use effect called when count value changes:"+count);
        //alert("use effect called when count value changes:"+count);
    },[count]);
   const Componentrender=()=>{
        console.log("Component Rendered");
        return "Component Rendered";
   } 

    return(
        <View>
            <Text>{Componentrender}</Text>
            <Text>Count Value:{count}</Text>
            <Button title="Increase Count" onPress={()=>{
                setCount(count+1);
            }}></Button> 
            <Text>Name:{name}</Text>
            <Button title="Change Name" onPress={()=>{
                setName("Doe");
            }}></Button>       

        </View>
    )

}