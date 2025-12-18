import {View, Text, Button, Pressable} from "react-native";
import{useState} from "react";
export function Pressabledemo(){
    const[ispressed,setPressed]=useState(false);
    const[ishover,setHover]=useState(false);
    return(
        <View>
            <Pressable 
            onPressIn={()=>{
                    setPressed(true);
                    console.log("OnPressIn");}}
            onPress={()=>console.log("onPress")}
            onPressOut={()=>{
                setPressed(false);
                console.log("OnPressOut");}
            }
            onHoverIn={()=>{
                setHover(true);
            }}
            onHoverOut={()=>setHover(false)}
            > 
            <View style={{
                backgroundColor:ispressed?"cadetblue":"aqua",
                padding:ishover?20:15,
                borderRadius:5
            }

            }>
                <Text>Click</Text>
            </View>
            </Pressable>
        </View>
    )
}