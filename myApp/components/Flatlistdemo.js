import { FlatList, View, Text } from "react-native";
import React from "react";

export function Flatlistdemo(){
    const data = Array.from({ length: 60 }, (_, i) => ({ id: String(i + 1), name: `User ${i + 1}` }));

    const renderItem=({item})=>(
        <View style={{padding:10, borderBottomWidth:1, borderColor:'#ccc'}}>
            <Text>{item.name}</Text>
        </View>
    );

    return(
      <View style={{flex:1}}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            ItemSeparatorComponent={() => <View style={{height:1, backgroundColor:'#ccc'}} />}
            ListHeaderComponent={() => <View><Text style={{fontSize:18,fontWeight:'600',padding:12}}>Users</Text></View>}
            style={{flex:1}}
            contentContainerStyle={{paddingBottom:20}}
        />
      </View>
    );
}       