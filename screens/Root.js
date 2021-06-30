import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";


const { Navigator, Screen } = createStackNavigator();

const Root = () => (
    <Navigator screenOptions={options => { return{ headerLeft : null }; }}>
       <Screen name="LoginScreen" component={ LoginScreen } options={options => { return{ headerShown: false};}}/>
       <Screen name="RegisterScreen" component={ RegisterScreen } options={options => { return{ headerShown: false};}}/>
    </Navigator>
  );

  export default Root;