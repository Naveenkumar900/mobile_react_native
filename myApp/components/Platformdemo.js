import { Platform } from "react-native";
import { View, Text } from "react-native";
import { Mybutton } from "./Btn/Mybutton"; // This will automatically resolve to the correct file based on platform
export function Platformdemo(){
    return(
        <View>
            {Platform.OS==="android" ? <Text>This is Android Device</Text> : null}
            {Platform.OS==="ios" ? <Text>This is iOS Device</Text> : null}
            {Platform.OS==="web" ? <Text>This is Web Platform</Text> : null}
            <Mybutton/>
        </View>
    )
}