import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';

const MeuButton = (props) => {
    //console.log(props);
    return(
      <TouchableHighlight style={styles.button} onPress={() => props.onClick()}><Text>{props.texto}</Text></TouchableHighlight>
    );
  };

  export default MeuButton;

  const styles = StyleSheet.create({
    texto:{
      fontSize:30,
    },
  
    button:{
      alignItems:'center',
      backgroundColor: '#008000',
      padding: 10,
      margin: 10,
    },
  
  });
  