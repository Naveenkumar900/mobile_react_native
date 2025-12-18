import {View, Text} from "react-native";
import { StyleSheet } from "react-native";
import { globalstyle } from "./Globalstyle";
export function Stylesdemo(){
    return(
        <View style={globalstyle.container}>
            <Text style={{...mystyle.title,...globalstyle.title}}>StyleDemo</Text>
        </View>
    )
}

const mystyle=StyleSheet.create(
    {
        container:{
            backgroundColor:"red"
        },
        title:{
            color:'greenyellow',
            fontSize:20,
            fontWeight:'bold'
        }
    }
)