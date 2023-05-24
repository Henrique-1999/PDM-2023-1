import React, { useEffect, useState } from 'react';
import {View, Text,StyleSheet} from 'react-native';
import MeuButton from '../components/MeuButton';

const Home = (props) => {
    const [contador, setcontador] = useState(0);
  
    console.log(props);
  //1. componentDidMount  
  //   useEffect(()=>{
  //     console.log('Montou o componente')
  //   },[]); 
  
  // //2. componentDidUpdate
  //   useEffect(()=>{
  //     console.log('Fez um update no componente')
  //   });
  
  // //3. contadorDidUpdate
  // useEffect(()=>{
  // console.log('Fez um update baseado em contador')
  // },[contador])
  
    const contar = () => {
   setcontador(contador + 1);
  }
  
  const Reset = () => {
    setcontador(0);
  }
  
    return (
      <View>
        <Text style={styles.texto}>Olá,mundo!</Text>
        <Text style={styles.texto}>Contador = {contador}</Text>
        <MeuButton texto="contar" onClick={contar}/>
        <MeuButton texto="Reset" onClick={Reset}/>
      </View>
    );
  };
  
  export default Home;
  const styles = StyleSheet.create({
    texto:{
       color:'#000000', 
      fontSize:30,
    },
  });
  