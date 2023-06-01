import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ForgotPassWord from './src/screens/ForgotPassWord';
import {Colors} from './src/assets/Images/Colors';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primaryDark} />
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} options={signInStyle} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassWord" component={ForgotPassWord} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const signInStyle = {
  headerStyle: {backgroundColor: Colors.primary},
  headerTintColor: Colors.white,
};
