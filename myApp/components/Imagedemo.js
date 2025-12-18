import {View, Image, Text} from "react-native";
import { ImageBackground } from "react-native";
export function Imagedemo(){
    return(
        <View>
            <Image source={require("../assets/favicon.png")}/>
             
             <ImageBackground style={{height:100, width:200, alignItems:"center",justifyContent:"center"}} source={require("../assets/splash-icon.png")}>
             <Text style={{backgroundColor:'red', textAlign:"center"}}>React Native </Text>

            </ImageBackground>
        </View>
    )
}