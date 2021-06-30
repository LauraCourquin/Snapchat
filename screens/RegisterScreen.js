import React from 'react'
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import Icon from '@expo/vector-icons/AntDesign';


export default class RegisterScreen extends React.Component{
  constructor(){
    super();
    this.state=({
      email:'',
      password:''
    })
  }
 updateValue(text,field){
    // console.warn(text)
    if(field=='email') {
        this.setState({
            email:text,
    })
        }else if(field =='password') {
            this.setState({
            password:text,
        })
    }
   }

    submit() {
        let collection={}
        collection.email=this.state.email,
        collection.password=this.state.password
        console.warn(collection)

        var url = 'https://snapi-wac.herokuapp.com/inscription';

        fetch(url, {
            method:'POST',
            body:JSON.stringify(collection),
            headers: new Headers({
            'Content-Type': 'application/json'
            })
            }).then(res => res.json())
            .catch(error => console.error('Error:',error))
            .then(response => console.log('Success:', response))
    }

    render(){
        const {navigate} = this.props.navigation;
        return(

            <View style={{backgroundColor:'radial-gradient(circle, hsla(60, 87%, 48%, 0.97) 38%, hsla(58, 93%, 78%, 1) 96%)', height:'100%'}}>
                <Image source={require('../assets/logo.png')} style={{alignSelf:'center', height:110, width:110, marginTop: '19%'}}/>
               
               
                <Text style={{fontSize:29, alignSelf:"center", marginTop:'9%'}}>Sign up</Text> 
                <Text style={{textAlign:"center",marginTop:5,opacity:0.4, fontSize:14}}>The best way to send you funny pictures</Text>
                       
               


               {/* Inputs */}
                    <View style={{ backgroundColor: 'rgba(246, 246, 241, 0.3)', flexDirection:'row',alignItem:"center",marginHorizontal:45,borderWidth:0.7,marginTop:55,paddingHorizontal:10,paddingVertical:10,borderColor:"white",borderRadius:10}}>
                        <Icon name='mail' color='hsla(60, 2%, 22%, 1)' size={29}/>
                        <TextInput placeholder="Email" placeholderTextColor="black" style={{width:"100%", paddingLeft:"5%"}} onChangeText={(text)=>this.updateValue(text,'email')} />
                    </View>

                    <View style={{ backgroundColor: 'rgba(246, 246, 241, 0.3)', flexDirection:'row',alignItem:"center",marginHorizontal:45,borderWidth:0.7,marginTop:20,paddingHorizontal:10,paddingVertical:10,borderColor:"white",borderRadius:10}}>
                        <Icon name='lock' color='hsla(60, 2%, 22%, 1)' size={31}/>
                        <TextInput secureTextEntry={true} placeholder="Password" placeholderTextColor="black" style={{width:"100%", paddingLeft:"5%"}}  onChangeText={(text)=>this.updateValue(text,'password')} />
                    </View>

                {/* Buttons */}
                <TouchableOpacity onPress={()=>this.submit(navigate('TabBar'))} style={{justifyContent:'center', marginTop:50, marginHorizontal:45, alignItems:'center', backgroundColor:'radial-gradient(circle, hsla(60, 2%, 22%, 0.97) 16%, hsla(0, 0%, 14%, 1) 62%)', borderRadius:13, paddingVertical:13 }}>
                    <Text style={{color: "white", fontSize: 19}}>Register</Text>
                </TouchableOpacity>

                <Text type="submit" onPress={()=>navigate('LoginScreen')} style={{alignSelf:'center', color:'hsla(60, 2%, 22%, 1)', marginTop:29, opacity:0.7, fontSize:16 }} >Already member ? Log In !</Text>
        
          </View>
        )
    }
}