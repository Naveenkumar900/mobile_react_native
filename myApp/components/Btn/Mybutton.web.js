import {View, Text, Button} from "react-native";
export function Mybutton(){
    return(
        <View>
            <Button title="Web Button" onPress={()=>console.log("Web button is clicked")}/>
        </View>
    )
}