import React from 'react';
import { View, Text, StyleSheet,Image, TextInput } from 'react-native';
import MeuButton from '../components/MeuButton';

const SignIn = (props) => {
  return (
    <View style={Styles.container}>
        <View style={Styles.viewSuperior}>
        <Image style={Styles.Image}source={require('../assets/Images/SignIn.png')}></Image>
        <TextInput>Email:</TextInput>
        <TextInput>Senha:</TextInput>
        <Text>Esqueceu sua senha?</Text>
        <MeuButton/>
        </View>
       
        <View style={Styles.viewInferior}>
            <View>

            </View>
            <Text>Não tem uma conta?</Text>
            <Text>Cadastre-se</Text>
        </View>
    </View>
  );
}

export default SignIn;

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#000000',

    },
    viewSuperior:{
        flex: 5,
        alignItems: 'center',
        backgroundColor: '#808080',
    },
    viewInferior:{
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#008000'
    },
    Image:{
    width: 100,
    height: 100,
    marginTop: 80,
    marginBottom: 50,
    }

});