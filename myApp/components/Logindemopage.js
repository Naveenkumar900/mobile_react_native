import {Image, Text, View,StyleSheet, TouchableOpacity} from "react-native";
export function Logindemopage(){
    return(
        <View style={mystyle.container}>
            <View style={mystyle.box1}>
                  <Image style={mystyle.image} source={require('../assets/undraw_fingerprint-login_19qv.png')}/>
            </View>
            <View style={mystyle.box2}>
                <View style={{...mystyle.box3,...mystyle.text}}>
                   <Text style={{fontSize:30,fontWeight:'bold'}}>Hello</Text>
                   <Text>Welcome to login page, where you can manage your daily tasks</Text>
                </View>
                <View style={mystyle.box4}>
                    <TouchableOpacity style={mystyle.loginButton} onPress={() => {}}>
                      <Text style={mystyle.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={mystyle.signupButton} onPress={() => {}}>
                      <Text style={mystyle.signupButtonText}>Signup</Text>
                    </TouchableOpacity>
                </View>
                <View style={mystyle.box5}>
                    <Text style={{color:'#888'}}>Need help? Contact support</Text>
                </View>
            </View>
        </View>
    )
}
const mystyle=StyleSheet.create({
    container:{
        backgroundColor:"transparent",
        flex:1
    },
    box1:{
         
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    box2:{
        backgroundColor:'transparent',
        flex:1
    },
    box3:{
        backgroundColor:'transparent',
        flex:3
    },
    box4:{
        backgroundColor:'transparent',
        flex:3,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'stretch',
        paddingHorizontal:20
    },
    box5:{
        backgroundColor:'transparent',
        flex:3,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        height:300,
        width:300,
         
        
    },
    text:{
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    loginButton:{
        backgroundColor:'#1E90FF',
        borderRadius:30,
        paddingVertical:12,
        alignItems:'center',
        marginVertical:8,
        width:'100%'
    },
    loginButtonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'600'
    },
    signupButton:{
        backgroundColor:'#fff',
        borderRadius:30,
        paddingVertical:12,
        alignItems:'center',
        marginVertical:8,
        borderWidth:2,
        borderColor:'blueviolet',
        width:'100%'
    },
    signupButtonText:{
        color:'blueviolet',
        fontSize:16,
        fontWeight:'600'
    }
})