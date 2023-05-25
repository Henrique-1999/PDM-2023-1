import React from 'react';
import { View, Text, StyleSheet,Image, TextInput} from 'react-native';
import MeuButton from '../components/MeuButton';
import {Colors} from '../assets/Images/Colors';

const SignIn = (props) => {
   
    const recuperarSenha = () => {
        alert('abrir recuperar senha');
    }

    const entrar = () => {
        alert('realizar login');
    }

  return (
    <View style={Styles.container}>
        <View style={Styles.viewSuperior}>
        <Image style={Styles.image}source={require('../assets/Images/SignIn.png')} accessibilityLabel='logo'/>
        <TextInput style={Styles.input}>Email : </TextInput>
        <TextInput style={Styles.input}>Senha : </TextInput>
        <Text style={Styles.esqueceuSenha} onPress={recuperarSenha}>Esqueceu sua senha?</Text>
        <MeuButton texto= "Entrar" onClick={entrar}/>
        </View>
       
        <View style={Styles.viewInferior}>
            <View style={Styles.ouHr}/>
            <View style={Styles.hr}/>
            <Text style={Styles.textoOu}>Ou</Text>
            <View/>
            <Text style={Styles.naoTemconta}>Não tem uma conta?</Text>
            <Text style={Styles.cadastreSe}>Cadastre-se</Text>
        </View>
    </View>
  );
}

export default SignIn;

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: Colors.black,

    },
    viewSuperior:{
        flex: 7,
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    viewInferior:{
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: Colors.primary,
    },
    image:{
    width: 100,
    height: 100,
    marginTop: 80,
    marginBottom: 50,
    },

    input:{
    width:'95%',
    backgroundColor: Colors.darkgrey,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 2,
    borderRadius:10,
    fontSize: 15,
    padding: 5,
    paddingBottom: 2,
    marginBottom: 10,
    },

    esqueceuSenha:{
    fontSize: 15,
    color: Colors.primary,
    alignSelf: 'flex-end',
    marginTop: 20,
    marginBottom: 50,
    marginRight: 10,
    },

    ouHr:{
        width:'100%',
        height:10,
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
    },

    hr:{
        width:'30%',
        height:1,
        borderBottomColor:Colors.grey,
        borderBottomWidth:2,
    },

    textoOu:{
        color:Colors.white,
        marginLeft:20,
        marginRight:20,
        fontSize:20,
    },

    naoTemconta:{
        fontSize: 18,
        color:Colors.white
    },

    cadastreSe:{
        fontSize: 16,
        color:Colors.white,
        marginLeft:5,
        borderBottomColor:Colors.grey,
        borderBottomWidth:2,
    },

});