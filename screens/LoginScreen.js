import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';


const LoginScreen = props => {
   
        const GoTo = () => {
          props.navigation.navigate('Root', {
           params: {},
           screen: "RegisterScreen"
          })
         };

         const GoToSnap = () => {
            props.navigation.navigate('TabBar')
           };

     return(
        <View style={{backgroundColor:'radial-gradient(circle, hsla(60, 87%, 48%, 0.97) 38%, hsla(58, 93%, 78%, 1) 96%)', height:'100%'}}>

            <Image source={require('../assets/logo.png')}
            style={{alignSelf:'center', height:110, width:110, marginTop: '19%'}}
            />

            <Text style={{fontSize:29, alignSelf:"center", marginTop:'9%'}}>Login</Text> 
            <Text style={{textAlign:"center",marginTop:5,opacity:0.4, fontSize:14}}>Connect to your account</Text>

        {/* Inputs */}
            <View style={{ backgroundColor: 'rgba(246, 246, 241, 0.3)', flexDirection:'row',alignItem:"center",marginHorizontal:45,borderWidth:0.7,marginTop:55,paddingHorizontal:10,paddingVertical:10,borderColor:"white",borderRadius:10}}>
                <Icon name='mail' color='hsla(60, 2%, 22%, 1)' size={29}/>
                <TextInput style={{width:"100%", paddingLeft:"5%"}} placeholder='Enter your mail' placeholderTextColor="black"></TextInput>
            </View>

            <View style={{ backgroundColor: 'rgba(246, 246, 241, 0.3)', flexDirection:'row',alignItem:"center",marginHorizontal:45,borderWidth:0.7,marginTop:20,paddingHorizontal:10,paddingVertical:10,borderColor:"white",borderRadius:10}}>
                <Icon name='lock' color='hsla(60, 2%, 22%, 1)' size={31}/>
                <TextInput secureTextEntry={true} style={{width:"100%", paddingLeft:"5%"}} placeholder='Enter your password' placeholderTextColor="black"></TextInput>
            </View>

        {/* buttons */}
            <View style={{justifyContent:'center', marginTop:50, marginHorizontal:45, alignItems:'center', backgroundColor:'radial-gradient(circle, hsla(60, 2%, 22%, 0.97) 16%, hsla(0, 0%, 14%, 1) 62%)', borderRadius:13, paddingVertical:13 }}>
              <TouchableOpacity onPress={GoToSnap}>
                    <Text style={{ color: "white", fontSize: 19}}>Login</Text>
                </TouchableOpacity>
            </View>

            <Text onPress={GoTo} style={{ alignSelf:'center', color:'hsla(60, 2%, 22%, 1)', marginTop:29, opacity:0.7, fontSize:16 }}>
                New on Snapchat ? Sign up !
            </Text>

        </View>


        )
    }

export default LoginScreen;