import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput  } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { styles } from "./HeaderStyle";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";
import { Tab } from '../TabModal/Modal'

export function Header(){

    const [name,setName] = useState (' ')
    const modalizeRef = useRef(null);
    function onOpen(){
      modalizeRef.current?.open();
    }

    const modalizeRef = useRef(null);

    function onOpen(){
      modalizeRef.current?.open();
    }

    return(
        <View style={styles.container}>

            <Portal>
                <Modalize ref={modalizeRef}><Tab/></Modalize>
            </Portal>

            <View style={styles.motherBoxHeader}> 

                <View style={styles.header}>

                    <Text style={{color: '#838383', fontSize:12 }}>Localização</Text>
                
                    <TouchableOpacity style={styles.escolher}>
                        <Text style={{color: '#000', fontSize:20 }}>Recife</Text>
                        <MaterialIcons style={{marginLeft: 10}} name="keyboard-arrow-down" size={20} color="#838383" />
                    </TouchableOpacity>

                </View>
                <View style={{flexDirection: "row", alignItems: 'center'}}>

                    <TouchableOpacity  style={styles.notification}>
                        <Ionicons  name="notifications" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onOpen}>
                        <EvilIcons style={{marginLeft: 20, marginTop: 3}} name="navicon" size={32} color="black" />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.containerInput}>
             

                <View style={styles.boxInput}>

                    <EvilIcons style={{marginLeft:10, marginBottom: 5}} name="search" size={24} color="#838383" />

                        <TextInput
                            style={styles.input}
                            placeholder='Pesquisar...'
                            placeholderTextColor={'#858585'}
                            onChangeText={setName}
                        />
                            
                </View>
                

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
        </View>
  
    )
}

