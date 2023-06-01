import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import SignUpStyle from '../assets/styles/signUpStyle';
import MeuButton from '../components/MeuButton';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';

const SignUp = ({navigation}) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cPass, setcPass] = useState('');

  const cadastrar = () => {
    if (nome !== '' && email !== '' && pass !== '' && cPass !== '') {
      auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
          let userF = auth().currentUser;
          userF
            .sendEmailVerification()
            .then(() => {
              Alert.alert(
                'Atenção:',
                'usuário cadastrado com sucesso, foi enviado um email de verificação para:' +
                  email,
              );
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: 'SignIn'}],
                }),
              );
            })
            .catch(e => {
              console.log('SignIn= erro ao entrar' + e);
            });
        })
        .catch(e => {
          switch (e.code) {
            case 'auth/email-already-in-use':
              Alert.alert('Erro:', 'O email ja está em uso.');
              break;
            case 'auth/operation-not-allowed':
              Alert.alert(
                'Erro:',
                'Falha na operação verifique os campos e tente novamente.',
              );
              break;
            case 'auth/invalid-email':
              Alert.alert('Erro:', 'Email inválido.');
              break;
            case 'auth/weak-password':
              Alert.alert('Erro:', 'A senha escolhida é muito fraca.');
              break;
          }
        });
    } else {
      Alert.alert('Atenção:', 'Todos os campos são obrigatórios.');
    }
  };

  return (
    <SafeAreaView style={SignUpStyle.container}>
      <ScrollView>
        <TextInput
          style={SignUpStyle.input}
          placeholder="Nome do usuário"
          keyboardType="default"
          returnKeyType="next"
          onChangeText={t => setNome(t)}
          onEndEditing={() => this.emailTextInput.focus()}
        />
        <TextInput
          ref={ref => {
            this.emailTextInput = ref;
          }}
          style={SignUpStyle.input}
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
          style={SignUpStyle.input}
          secureTextEntry={true}
          placeholder="Senha"
          keyboardType="default"
          returnKeyType="next"
          onChangeText={t => setPass(t)}
          onEndEditing={() => this.cPassTextInput.focus()}
        />
        <TextInput
          // eslint-disable-next-line prettier/prettier
            ref={(ref) => {
            this.cPassTextInput = ref;
          }}
          style={SignUpStyle.input}
          secureTextEntry={true}
          placeholder="Confirmar senha"
          keyboardType="default"
          returnKeyType="go"
          onChangeText={t => setcPass(t)}
          onEndEditing={() => cadastrar()}
        />
        <MeuButton texto="Cadastrar" onClick={cadastrar} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
