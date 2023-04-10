import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { MaterialIcons, Fontisto, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import { styles } from './dreamsVilleHouseSTYLE';
// TODO ver a imagem de favorito que não está na mesma cor do PromiseRejectionEvent.
export function DreamsVilleHouse() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <TouchableOpacity style={styles.arrowIcon}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
        </TouchableOpacity>

        <Image 
        source={require('../../../assets/img/House.png')}
        style={styles.upIMG}
        />

        <TouchableOpacity style={styles.favoriteIcon}>
          <Fontisto name="favorite" size={22} color="white" />
        </TouchableOpacity>

        <View style={styles.imgDescriptionName}>
          <Text>Dreamsville House</Text>
          <Text>JL Sultan Iskandar Muda, Jakarta Selatan</Text>
        </View>

        <View tyle={styles.imgDescriptionBenefits}>
          <FontAwesome5 name="bed" size={24} color="black" />
          <Text>6 quartos</Text>

          <FontAwesome name="bathtub" size={24} color="black" />
          <Text>4 banheiros</Text>
        </View>

      </View>
    </View>

  )
}