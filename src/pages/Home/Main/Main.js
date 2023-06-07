import React from "react";
import { View,Text, ScrollView, TouchableOpacity, Image,ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./MainStyle";
import { CommonActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";


export function Main(){

    const navigation = useNavigation()

    const openDream = () => {
        navigation.dispatch(CommonActions.navigate({
            name: 'Dream'
        }))
    }

    return (
        <View style={styles.Contain}>

            <View style={styles.boxMainText}>
                <Text style={{fontSize: 16,fontWeight: 500}}>Perto de Você</Text>
                <TouchableOpacity>
                    <Text style={{color: '#838383', fontSize: 12}}>Veja mais</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.ScrollHori}>
                <TouchableOpacity onPress={openDream} style={styles.boxImage}>
                    <ImageBackground
                        source={require('../../../../assets/img/Home/House.png')}
                        style={styles.HouseImg}
                        imageStyle={{borderRadius: 10}}
                    >   
                        <LinearGradient
                            colors={['transparent', 'rgba(0,0,0,0.7)']}
                            style={styles.LinearGradient}
                        >
                            <View style={styles.location}>
                                <Ionicons style={{color: '#fff', fontSize: 12}} name="ios-location-outline" size={24} color="black" />
                                <Text style={{color: '#fff', fontSize: 12}}>1,8Km</Text>
                            </View>
                            <View style={{marginTop: 180, marginLeft: 15}}>
                                <Text style={{color: '#fff', fontSize: 16}}>Dreamsville House</Text>
                                <Text style={{color: '#fff', fontSize: 12}}>JL Sultan Iskandar Muda</Text>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boxImage}>
                    <ImageBackground
                        source={require('../../../../assets/img/Home/Apartamento.jpg')}
                        style={styles.HouseImg}
                        imageStyle={{borderRadius: 10}}
                    >   
                        <LinearGradient
                            colors={['transparent', 'rgba(0,0,0,0.7)']}
                            style={styles.LinearGradient}
                        >
                            <View style={styles.location}>
                                <Ionicons style={{color: '#fff', fontSize: 12}} name="ios-location-outline" size={24} color="black" />
                                <Text style={{color: '#fff', fontSize: 12}}>4,2Km</Text>
                            </View>
                            <View style={{marginTop: 180, marginLeft: 15}}>
                                <Text style={{color: '#fff', fontSize: 16}}>Dreamsville Apartament</Text>
                                <Text style={{color: '#fff', fontSize: 12}}>JL Sultan Iskandar Muda</Text>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.boxImage}>
                    <ImageBackground
                        source={require('../../../../assets/img/Home/Hotel.jpg')}
                        style={styles.HouseImg}
                        imageStyle={{borderRadius: 10}}
                    >   
                        <LinearGradient
                            colors={['transparent', 'rgba(0,0,0,0.7)']}
                            style={styles.LinearGradient}
                        >
                            <View style={styles.location}>
                                <Ionicons style={{color: '#fff', fontSize: 12}} name="ios-location-outline" size={24} color="black" />
                                <Text style={{color: '#fff', fontSize: 12}}>3,8Km</Text>
                            </View>
                            <View style={{marginTop: 180, marginLeft: 15}}>
                                <Text style={{color: '#fff', fontSize: 16}}>Dreamsville Hotel</Text>
                                <Text style={{color: '#fff', fontSize: 12}}>JL Sultan Iskandar Muda</Text>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </TouchableOpacity>

                
            </ScrollView> 
            <View style={styles.boxMainTextIn}>
                <Text style={{fontSize: 16,fontWeight: 500}}>O melhor para Você</Text>
                <TouchableOpacity>
                    <Text style={{color: '#838383', fontSize: 12}}>Veja mais</Text>
                </TouchableOpacity>
            </View> 
            
        </View>
    );
}