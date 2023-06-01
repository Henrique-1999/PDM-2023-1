import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import MeuButton from '../components/MeuButton';
import {Colors} from '../assets/Images/Colors';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const recuperarSenha = () => {
    navigation.navigate('ForgotPassWord');
  };

  const entrar = () => {
    console.log(`Email=${email} senha=${pass}`);
    if (email !== '' && pass !== '') {
      auth()
        .signInWithEmailAndPassword(email, pass)
        .then(() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Home'}],
            }),
          );
        })
        .catch(e => {
          console.log('SignIn= erro ao entrar' + e);
          switch (e.code) {
            case 'auth/user-not-found':
              Alert.alert('Erro:', 'Usuário não cadastrado.');
              break;
            case 'auth/wrong-password':
              Alert.alert('Erro:', 'Senha incorreta.');
              break;
            case 'auth/invalid-email':
              Alert.alert('Erro:', 'Email inválido.');
              break;
            case 'auth/user-disabled':
              Alert.alert('Erro:', 'Usuário desabilitado.');
              break;
          }
        });
    } else {
      Alert.alert('Erro:', 'Todos os campos devem ser preenchidos');
    }
  };

  const cadastrar = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'SignUp'}],
      }),
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <View style={Styles.viewSuperior}>
          <Image
            style={Styles.image}
            source={require('../assets/Images/icon.png')}
            accessibilityLabel="logo"
          />
          <TextInput
            style={Styles.input}
            placeholder="Email"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={t => setEmail(t)}
            onEndEditing={() => this.passTextInput.focus()}
          />
          <TextInput
            // eslint-disable-next-line prettier/prettier
            ref={(ref) => {
              this.passTextInput = ref;
            }}
            style={Styles.input}
            secureTextEntry={true}
            placeholder="Senha"
            keyboardType="default"
            returnKeyType="go"
            onChangeText={t => setPass(t)}
          />
          <Text style={Styles.esqueceuSenha} onPress={recuperarSenha}>
            Esqueceu sua senha?
          </Text>
          <MeuButton texto="Entrar" onClick={entrar} />
        </View>
      </ScrollView>
      <View style={Styles.viewInferior}>
        <View style={Styles.ouHr} />
        <View style={Styles.hr} />
        <Text style={Styles.textoOu}>Ou</Text>
        <View />
        <Text style={Styles.naoTemconta} onPress={cadastrar}>
          Cadastre-se
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: Colors.black,
  },
  viewSuperior: {
    flex: 7,
    height: 600,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  viewInferior: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: Colors.white,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 80,
    marginBottom: 50,
  },

  input: {
    width: '95%',
    backgroundColor: Colors.darkgrey,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 2,
    borderRadius: 10,
    fontSize: 15,
    padding: 5,
    paddingBottom: 2,
    marginBottom: 10,
  },

  esqueceuSenha: {
    fontSize: 15,
    color: Colors.primary,
    alignSelf: 'flex-end',
    marginTop: 20,
    marginBottom: 50,
    marginRight: 10,
  },

  ouHr: {
    width: '100%',
    height: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },

  hr: {
    width: '30%',
    height: 1,
  },

  textoOu: {
    color: Colors.black,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 2,
    fontSize: 20,
  },

  naoTemconta: {
    fontSize: 22,
    color: Colors.darkgrey,
    marginLeft: 5,
    marginTop: 20,
    textDecorationLine: 'underline',
  },

  scrollView: {
    backgroundColor: Colors.white,
    height: 480,
  },
});
