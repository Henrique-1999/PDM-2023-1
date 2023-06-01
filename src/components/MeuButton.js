import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import MeuButtonstyle from '../assets/styles/meuButtonStyle';

const MeuButton = props => {
  //console.log(props);
  return (
    <TouchableHighlight
      style={MeuButtonstyle.button}
      onPress={() => props.onClick()}>
      <Text style={MeuButtonstyle.texto}>{props.texto}</Text>
    </TouchableHighlight>
  );
};

export default MeuButton;
