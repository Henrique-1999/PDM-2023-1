import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ForgotPassWord from './src/screens/ForgotPassWord';
import {Colors} from './src/assets/colors';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primaryDark} />
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} options={signIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} options={signUp} />
        <Stack.Screen
          name="ForgotPassWord"
          component={ForgotPassWord}
          options={forgotPassWord}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const signIn = {
  headerStyle: {backgroundColor: Colors.primary},
  headerTintColor: Colors.white,
};

const forgotPassWord = {
  title: 'Recuperar senha',
  headerStyle: {backgroundColor: Colors.primary},
  headerTitleStyle: {color: Colors.white},
  headerTintColor: Colors.white,
};

const signUp = {
  title: 'Cadastrar usuário',
  headerStyle: {backgroundColor: Colors.primary},
  headerTitleStyle: {color: Colors.white},
  headerTintColor: Colors.white,
};
