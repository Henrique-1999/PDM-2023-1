import {Colors} from '../colors';

const SignInStyle = {
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
};

export default SignInStyle;
