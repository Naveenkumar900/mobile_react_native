import {View, Text,Button} from "react-native";
export function Mybutton(){
    return(
        <View>
            <Button title="Android Button" onPress={()=>console.log("Android button is clicked")}/>
        </View>
    )
}
