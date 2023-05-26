import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, Feather, Octicons, AntDesign } from '@expo/vector-icons';

export function Tab(){
    return(
        <View style={styles.fundo}>
            <TouchableOpacity style={{marginTop: 50}}>
                <View style={styles.flex}>
                    <View style={{flexDirection: 'row'}}>
                    <AntDesign name="home" size={24} color="white" />
                    <Text style={styles.letras}>Início</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="#84C7EC" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.flex}>
                    <View style={{flexDirection: 'row'}}>
                    <Ionicons name="md-person-outline" size={24} color="white" />
                    <Text style={styles.letras}>Perfil</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="#84C7EC" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.flex}>
                    <View style={{flexDirection: 'row'}}>
                    <Ionicons name="location-outline" size={24} color="white" />
                    <Text style={styles.letras}>Localização</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="#84C7EC" />
                </View>
            </TouchableOpacity>
            <View style={{borderWidth: 0.5, width: '100%', borderColor: 'white', marginVertical: 20}}></View>
            <TouchableOpacity>
                <View style={styles.flex}>
                    <View style={{flexDirection: 'row'}}>
                    <Feather name="bookmark" size={24} color="white" />
                    <Text style={styles.letras}>Salvos</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="#84C7EC" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.flex}>
                    <View style={{flexDirection: 'row'}}>
                    <Ionicons name="notifications-outline" size={25} color="white" />
                    <Text style={styles.letras}>Notificação</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="#84C7EC" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.flex}>
                    <View style={{flexDirection: 'row'}}>
                    <Feather name="message-circle" size={25} color="white" />
                    <Text style={styles.letras}>Mensagem</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="#84C7EC" />
                </View>
            </TouchableOpacity>

            <View style={{borderWidth: 0.5, width: '100%', borderColor: 'white', marginVertical: 20}}></View>

            <TouchableOpacity>
                <View style={styles.flex}>
                    <View style={{flexDirection: 'row'}}>
                    <Octicons name="gear" size={25} color="white" />
                    <Text style={styles.letras}>Configurações</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="#84C7EC" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.flex}>
                    <View style={{flexDirection: 'row'}}>
                    <Feather name="help-circle" size={25} color="white" />
                    <Text style={styles.letras}>Ajuda</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color="#84C7EC" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.flexred}>
                    <Ionicons name="ios-power-sharp" size={25} color="red" />
                    <Text style={styles.red}>Sair</Text>
                </View>
            </TouchableOpacity>
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    fundo:{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#0A8ED9',
        height: 720,
    },
    letras:{
        fontSize: 20,
        color: 'white',
        marginLeft: 15,
    },
    flex:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 60,
        paddingLeft: 25,
        paddingRight: 30,
    },

    flexred:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 60,
        paddingLeft: 25,
        paddingRight: 30,
    },

    red:{
        fontSize: 20,
        color: 'red',
        marginLeft: 15,
    },
});