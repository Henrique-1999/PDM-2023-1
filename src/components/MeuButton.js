import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import { Colors } from '../assets/Images/Colors';

const MeuButton = (props) => {
    //console.log(props);
    return(
      <TouchableHighlight style={styles.button} onPress={() => props.onClick()}><Text style={styles.texto}>{props.texto}</Text></TouchableHighlight>
    );
  };

  export default MeuButton;

  const styles = StyleSheet.create({
    texto:{
      fontSize:20,
      color: Colors.white,
    },
  
    button:{
      width:'95%',
      alignItems:'center',
      backgroundColor: Colors.primary,
      padding: 10,
      margin: 10,
      padding: 10,
      borderRadius: 20,
    },
  
  });
  