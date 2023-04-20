import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Image, FlatList} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './homeSTYLE';


export function Home() {

  const [name,setName] = useState (' ')
 
  const [imoveis, setimoveis] = useState([
    { 
      id: 1, 
      title: 'Orchad House', 
      valor: 'R$2.500.000.000 / Ano',
      description1: '6 Quartos',
      description2: '4 Banheiros',
      image: require('../../../assets/img/Home/OrchardHouse.png'),
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
      title: 'Orchad House', 
      valor: 'R$2.500.000.000 / Ano',
      description1: '6 Quartos',
      description2: '4 Banheiros',
      image: require('../../../assets/img/Home/OrchardHouse.png'),
    },
    { 
      id: 4, 
      title: 'The Hollies House', 
      valor: 'R$2.000.000.000 / Ano',
      description1: '5 Quartos',
      description2: '2 Banheiros',
      image: require('../../../assets/img/Home/TheHollies.png'), 
    },
    { 
      id: 5, 
      title: 'Orchad House', 
      valor: 'R$2.500.000.000 / Ano',
      description1: '6 Quartos',
      description2: '4 Banheiros',
      image: require('../../../assets/img/Home/OrchardHouse.png'),
    },
    { 
      id: 6, 
      title: 'The Hollies House', 
      valor: 'R$2.000.000.000 / Ano',
      description1: '5 Quartos',
      description2: '2 Banheiros',
      image: require('../../../assets/img/Home/TheHollies.png'), 
    },

  ]); 

  return (
    
    <View style={styles.container}>

       <View style={styles.motherBoxHeader}> 

        <View style={styles.header}>
          
          <Text  style={{color: '#838383', fontSize:12 }}>Localização</Text>
          
          <View style={styles.escolher}>
            <Text style={{color: '#000', fontSize:20 }}>Recife</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </View>
        </View>
        <TouchableOpacity  style={styles.notification}>
          <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>

      </View>

      <View style={{flexDirection: 'row', width: 340, marginBottom: 20}}> 
        <View style={{flexDirection: 'column', width: '85%', alignItems:'center'}}>
          <View style={styles.boxInput}>
            <EvilIcons style={{marginLeft:10}} name="search" size={24} color="#838383" />
            <TextInput
              style={styles.input}
              placeholder='Pesquisar...'
              placeholderTextColor={'#858585'}
              onChangeText={setName}
            />
          </View>
          <Text style={{color: '#838383', fontSize: 8, marginLeft: 30, marginTop: 5}}>{name}</Text>
        </View >
        <TouchableOpacity style={styles.boxSettings}>
          <AntDesign name="filter" size={24} color="black" />
        </TouchableOpacity>

      </View>

      <View style={styles.OpcoesImov}>

        <TouchableOpacity>
           <Text style={{color:'#838383'}}>Casa</Text>
        </TouchableOpacity>

        <TouchableOpacity>
           <Text style={{color:'#838383'}}>Apartamento</Text>
        </TouchableOpacity>

        <TouchableOpacity>
           <Text style={{color:'#838383'}}>Hotel</Text>
        </TouchableOpacity>

        <TouchableOpacity>
           <Text style={{color:'#838383'}}>Flat</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.boxScrollHorizontal}>
        <Text style={{fontSize: 16, fontWeight: 500}}>Perto de Você</Text>
        <TouchableOpacity>
            <Text style={{color: '#838383', fontSize: 12}}>Veja mais</Text>
        </TouchableOpacity>
      </View>


        <View style={{height:310, width: '100%',}}>
          <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={styles.ScrollHori}>
            
            <TouchableOpacity style={styles.boxImage}>
                <Image
                  source={require('../../../assets/img/Home/House.png')}
                  style={styles.HouseImg}
                />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.boxImageMovH}>
              <Image
                    source={require('../../../assets/img/Home/House.png')}
                    style={styles.HouseImg}
                  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxImageMovH}>
              <Image
                    source={require('../../../assets/img/Home/House.png')}
                    style={styles.HouseImg}
                  />
            </TouchableOpacity> 
          </ScrollView>
        </View>
      
      
        <View style={styles.OpcoesListadas}>
          <Text style={{fontSize: 16, fontWeight: 500}}>O melhor para você</Text>
          <TouchableOpacity>
              <Text style={{color: '#838383', fontSize: 12}}>Veja mais</Text>
          </TouchableOpacity>
        </View>


      <FlatList
        numColumns={1}
        keyExtractor={item => item.id}
        data={imoveis}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.boxImov}>

            <View style={{marginLeft: 10}}>
              <Image style={{borderRadius: 10}} source={item.image}/>
            </View>
            <View style={{marginLeft: 20}}>

              <Text style={{fontSize: 16, color: '#000', fontWeight: 400}}>{item.title}</Text>
              <Text style={{fontSize: 12, color: '#0A8ED9', marginVertical: 3}}>{item.valor}</Text>
              <View style={{flexDirection: 'row',justifyContent: 'center'}}>

                <View style={{flexDirection: 'row', alignItems: 'center' }}>

                  <FontAwesome5 style={{fontSize: 13, color: '#858585'}} name="bed" size={24} color="black" />
                  <Text style={{marginLeft: 5 , color: '#858585'}}>{item.description1}</Text>

                </View>
                <View style={{flexDirection: 'row',alignItems: 'center', marginLeft: 10}}>

                  <FontAwesome style={{fontSize: 13, color: '#858585'}} name="bathtub" size={24} color="black" />
                  <Text  style={{marginLeft: 5, color: '#858585'}}>{item.description2}</Text>

                </View>

              </View>

            </View>

          </TouchableOpacity>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

