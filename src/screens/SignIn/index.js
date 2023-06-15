import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import MeuButton from '../../components/MeuButton';
import SignInStyle from './style';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const recuperarSenha = () => {
    navigation.navigate('ForgotPassWord');
  };

  const entrar = () => {
    if (email !== '' && pass !== '') {
      auth()
        .signInWithEmailAndPassword(email, pass)
        .then(() => {
          if (auth().currentUser.emailVerified) {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'Home'}],
              }),
            );
          } else {
            Alert.alert(
              'Atenção:',
              'Seu email não foi verificado, verifique-o para prosseguir.',
            );
            return;
          }
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
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={SignInStyle.container}>
      <ScrollView style={SignInStyle.scrollView}>
        <View style={SignInStyle.viewSuperior}>
          <Image
            style={SignInStyle.image}
            source={require('../../assets/images/icon.png')}
            accessibilityLabel="logo"
          />
          <TextInput
            style={SignInStyle.input}
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
            style={SignInStyle.input}
            secureTextEntry={true}
            placeholder="Senha"
            keyboardType="default"
            returnKeyType="go"
            onChangeText={t => setPass(t)}
          />
          <Text style={SignInStyle.esqueceuSenha} onPress={recuperarSenha}>
            Esqueceu sua senha?
          </Text>
          <MeuButton texto="Entrar" onClick={entrar} />
        </View>
        <View style={SignInStyle.viewInferior}>
          <View style={SignInStyle.ouHr} />
          <View style={SignInStyle.hr} />
          <Text style={SignInStyle.textoOu}>Ou</Text>
          <View />
          <Text style={SignInStyle.naoTemconta} onPress={cadastrar}>
            Cadastre-se
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
