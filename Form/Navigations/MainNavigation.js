
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const Stack=createStackNavigator()
const MainNavigation=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
                <Stack.Screen name='Register' component={RegisterScreen}  options={{headerShown:false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation
