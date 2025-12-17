import { TextInput, View, Text, Button } from "react-native";
import {useState} from "react";
export function Body(){
    const [bmi, setBmi]=useState(0);
    const [w, setW]=useState(0);
    const [h, setH]=useState(0);
    let setBm=()=>{
        setBmi(w/(h*h))
    }
    return(
        <View>
            <TextInput style={{borderWidth:1, margin:10}} placeholder="Height" onChangeText={setH}></TextInput>
            <TextInput style={{borderWidth:1, margin:10}} placeholder="Weight" onChangeText={setW}></TextInput>
            <Button title="BMI"onPress={setBm}></Button>
            <Text> your BMI is {bmi}</Text>
        </View>
    )
}