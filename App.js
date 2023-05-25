import React from 'react';
import { Header } from './src/pages/Home/Header/Header';
import { Main } from './src/pages/Home/Main/Main';
import { FooterList } from './src/pages/Home/Footer/components/FooterList';
import { DreamsVilleHouse } from './src/pages/DreamsVilleHouse/dreamsVilleHouse';
import { View, StyleSheet } from 'react-native';


const data = [
  { 
    id: 1,
    title: 'Dreamsville House',
    valor: 'R$ 2.500.000.000 / Ano',
    description1: '6 Quartos',
    description2: '5 Banheiros',
    image: require('./assets/img/Home/House.png'),
  },
  { 
    id: 2, 
    title: 'The Hollies House', 
    valor: 'R$2.000.000.000 / Ano',
    description1: '5 Quartos',
    description2: '2 Banheiros',
    image: require('./assets/img/Home/TheHollies.png'), 
  },
  { 
    id: 3,
    title: 'Dreamville Apartament',
    valor: 'R$ 2.800.000.000 / Ano',
    description1: '6 Quartos',
    description2: '3 Banheiros',
    image: require('./assets/img/Home/Apartamento.jpg'),
  },
  { 
    id: 4, 
    title: 'The Hollies House', 
    valor: 'R$10000 / Diária',
    description1: '2 Quartos',
    description2: '1 Banheiros',
    image: require('./assets/img/Home/Hotel.jpg'), 
  },
]


export default function App (){
  return(
    <View style={styles.container}>
      <Header />
      <Main />
      <FooterList data={data} />
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