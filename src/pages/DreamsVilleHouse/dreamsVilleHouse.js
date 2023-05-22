import React from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, Button, Alert } from 'react-native';
import { styles } from './dreamsVilleHouseSTYLE';

export function DreamsVilleHouse() {

  function alugar() {
    Alert.alert("Alugar?", ` Deseja realmente alugar o imóvel?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Imóvel alugado com sucesso"),
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <TouchableOpacity style={styles.arrowIcon}>
          <Image source={require('../../../assets/icons/IC_Back.png')} />
        </TouchableOpacity>

        <Image
          source={require('../../../assets/img/Home/House.png')}
          style={styles.upIMG}
        />

        <TouchableOpacity style={styles.favoriteIcon}>
          <Image source={require('../../../assets/icons/IC_Bookmark.png')} />
        </TouchableOpacity>

      </View>

      <View style={styles.descriptionContainer}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Descrição</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginTop: 10, textAlign: 'justify' }}>A moradia de 3 pisos que tem um design moderno, tem uma grande piscina e uma garagem que cabem até quatro carros...</Text>
          {/* <Text style={{color: 'blue', fontWeight: 'bold'}}>Veja mais</Text> */}
        </View>
      </View>

      <View style={styles.proprietarioBox}>
        <Image source={require('../../../assets/icons/Image.png')} />
        <View style={styles.proprietarioText}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Pedro Rodrigues</Text>
          <Text>Proprietário</Text>
        </View>
        <View style={styles.proprietarioIcon}>
          <Image source={require('../../../assets/icons/IC_Phone.png')} />
          <Image source={require('../../../assets/icons/IC_Message.png')} />
        </View>
      </View>

      <Text style={styles.galeriaTitle}>Galeria</Text>

      <View style={{ height: 75, width: '100%' }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>

          <TouchableOpacity style={styles.scrolledImg}>
            <Image
              source={require('../../../assets/img/DreamsVilleHouse/Dreamsville1.png')}
              style={styles.IMG} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.scrolledImg}>
            <Image
              source={require('../../../assets/img/DreamsVilleHouse/Dreamsville2.png')}
              style={styles.IMG}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.scrolledImg}>
            <Image
              source={require('../../../assets/img/DreamsVilleHouse/Dreamsville3.png')}
              style={styles.IMG}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.scrolledImg}>
            <Image
              source={require('../../../assets/img/DreamsVilleHouse/Dreamsville4.png')}
              style={styles.IMG}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={{ color: '#838383', fontSize: 12 }}>Preço</Text>
          <Text>R$ 2.500.000.000 / Ano</Text>
        </View>
        <View style={styles.footerBTN}>
          <Button title='Alugar agora' onPress={alugar} />
        </View>
      </View>
    </View>

  )
}