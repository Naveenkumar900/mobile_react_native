import axios from "axios";
import { View, Text, TouchableHighlight,Button } from "react-native";
import { use, useEffect, useState } from "react";
import { FlatList } from "react-native";
export function Axiosdemo(){
    const [list,setList]=useState([]);
    useEffect(()=>{ axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
        setList(res.data);
     })
     .catch(error=>{
         console.log("error occured")
     });
    },[]);

    const Postdata=()=>{
        let data={
            userId:1,
            id:12,
            title:"Hello I am learning React Native",
            body:"19:12:2025"
        };
        axios.post('https://jsonplaceholder.typicode.com/posts',data)
        .then(res=>{
            console.log("Data Posted Successfully");
            console.log(res.data);
        })
        .catch(error=>{
            console.log("Error occured while posting data");
        });
    }


    return(
        <View style={{flex:1,padding:20}}>
            <Button title="Post Data" onPress={Postdata}/>

            <FlatList 
              data={list}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
                <View style={{paddingVertical:8}}><Text>{item.title}</Text></View>
              )}
            />
        </View>
    );
}