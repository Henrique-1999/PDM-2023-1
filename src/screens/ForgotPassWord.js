import React from 'react';
import {View, Text, TextInput} from 'react-native';

const ForgotPassWord = () => {
  return (
    <View>
       <TextInput
            style={Styles.input}
            placeholder="Email"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={t => setEmail(t)}
            onEndEditing={() => this.passTextInput.focus()}
          />
    </View>
  );
};

export default ForgotPassWord;
