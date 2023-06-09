import React from 'react';
import { View, TouchableOpacity,Image, ImageBackground,Text, ScrollView, Button, Alert } from 'react-native';
import { styles } from './dreamsVilleHouseSTYLE';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export function DreamsVilleHouse() {

  const navigation = useNavigation()

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

      <View style={styles.Exibir}>
        <ImageBackground
          source={require('../../../assets/img/Home/House.png')}
          style={{width: 350, height: 320}}
          imageStyle={{borderRadius: 10}}         
        >
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={styles.LinearGradient}
          >
            <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.BoxIcons}>
              <Ionicons style={{color: '#505050'}} name="arrow-back-circle-sharp" size={26} color="black" />
              <Feather style={{color: '#505050'}} name="bookmark" size={24} color="black" />
            </TouchableOpacity>
            <View style={{marginLeft: 15}}>
              <Text style={{color: '#fff', fontSize: 32}}>Dreamsville House</Text>
              <Text style={{color: '#fff', fontSize: 16}}>Jl. Sultan Iskandar Muda, Jakarta selatan</Text>

              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesome style={{fontSize: 13, color: '#858585', marginTop: 8}} name="bed" size={24} color="black" />
                  <Text style={{marginLeft: 5 , color: '#858585', marginTop: 8}}>5 Quartos</Text>
                </View>

                <View style={{flexDirection: 'row',alignItems: 'center', marginLeft: 10}}>
                  <FontAwesome5 style={{fontSize: 13, color: '#858585', marginTop: 8}} name="bath" size={24} color="black" />
                  <Text style={{marginLeft: 5, color: '#858585', marginTop: 8}}>6 Banheiros</Text>
                </View>
              </View>             

            </View>
            

          </LinearGradient>
        </ImageBackground>
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
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: -15 }}>Pedro Rodrigues</Text>
          <Text style={{marginLeft: -15}}>Proprietário</Text>
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