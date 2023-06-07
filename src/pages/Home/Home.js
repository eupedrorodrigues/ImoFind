import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { FooterList } from './Footer/components/FooterList'
import * as React from 'react';
import { useState } from 'react'
import { View } from 'react-native';
import { Host } from 'react-native-portalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export function Home() {
  const [data, setData] = useState([
    { 
      id: 1,
      title: 'Dreamsville House',
      valor: 'R$ 2.500.000.000 / Ano',
      description1: '6 Quartos',
      description2: '5 Banheiros',
      image: require('../../../assets/img/Home/House.png'),
    },
    { 
      id: 2,
      title: 'The Hollies House',
      valor: 'R$2.000.000.000 / Ano',
      description1: '5 Quartos',
      description2: '2 Banheiros',
      image: require('../../../assets/img/Home/TheHollies.png'),
    },
    { 
      id: 3,
      title: 'Dreamville Apartament',
      valor: 'R$ 2.800.000.000 / Ano',
      description1: '6 Quartos',
      description2: '3 Banheiros',
      image: require('../../../assets/img/Home/Apartamento.jpg'),
    },
    { 
      id: 4, 
      title: 'The Hollies House',
      valor: 'R$10000 / Diária',
      description1: '2 Quartos',
      description2: '1 Banheiros',
      image: require('../../../assets/img/Home/Hotel.jpg'),
    },
  ])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Host>
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', width: '100%'}}>
          <Header/>
          <Main/>
          <FooterList data={data} />
        </View>
      </Host>
    </GestureHandlerRootView>
  )
}

