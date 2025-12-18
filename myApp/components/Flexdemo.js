import {View, Text, StyleSheet,Button} from "react-native";
export function Flexdemo(){
    return(
         
        <View style={mystyle.container}>
            <View style={mystyle.box1}>
                <Text>Box1</Text>
            </View>
            <View style={mystyle.box2}>
                <Text>Box2</Text>
                <Button title='btn1'/> 
                <Button title='btn2'/> 
                <Button title="btn3"/> 
                <Button title="btn4"/> 
            </View>
            <View style={mystyle.box3}>
                <Text>Box3</Text>
            </View>

             
        </View>
         

    )
}

const mystyle=StyleSheet.create({
    container:{
        backgroundColor:'steelblue',
        flex:1
    },
    box1:{
        backgroundColor:'powderblue',
        flex:1
    },
    box2:{
      backgroundColor:'cadetblue',
      flex:2,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'

    },
    box3:{
        backgroundColor:'slateblue',
        flex:2
    }

})