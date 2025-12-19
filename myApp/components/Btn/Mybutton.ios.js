import {View, Text, Button} from "react-native";
export function Mybutton(){
    return(
        <View>
            <Button title="iOS Button" onPress={()=>console.log("iOS button is clicked")}/>
        </View>
    )
}