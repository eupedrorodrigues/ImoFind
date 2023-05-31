import React from 'react';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { FooterList } from './Footer/components/FooterList'
import { View, StyleSheet } from 'react-native';


export function Home (){
  return(
    <View style={styles.container}>
      <Header />
      <Main />
      <FooterList />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    }, 
    
  })