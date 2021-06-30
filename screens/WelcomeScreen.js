import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, TouchableOpacity, Image } from 'react-native';

const WelcomeScreen = props => {

    const GoToLogin = () => {
        props.navigation.navigate('Root', {
         params: {},
         screen: "LoginScreen"
        })
       };

       const GoToReg = () => {
        props.navigation.navigate('Root', {
         params: {},
         screen: "RegisterScreen"
        })
       };
    

    return (
        <View style={{ alignItems: 'center' }}>
        
            <Text style={{fontSize:42, alignSelf:"center", color: '#4a3933', textAlign: "center",marginTop:'25%', marginBottom:'9%'}}>Welcome on Snapchat !</Text> 

            <Image source={require('../assets/welcome.jpeg')} style={{height:250, width:'100%', alignSelf:'center'}}/>

            <TouchableOpacity>
                <View style={btn.ButtonGroup}>              
                        <Text style={styles.button} onPress={GoToLogin}>Login</Text>
                        <Text style={styles.button} onPress={GoToReg}>Register</Text>           
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
        button: {
            width: '48%',
            borderColor: '#4a3933',
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: '#e1e203',
            color: '#4a3933',
            fontSize: 17,
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 13
          }
  });

  const btn = StyleSheet.create({
   ButtonGroup: {
       margin: '5%',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-around',
       width: '90%',
       marginTop: '15%'
   } 
});

export default WelcomeScreen;


