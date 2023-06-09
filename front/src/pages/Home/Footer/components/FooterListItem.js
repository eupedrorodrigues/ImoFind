import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export function FooterListItem(props){
    return(
        <View style={styles.motherContain}>
            
            <TouchableOpacity style={styles.boxImov}>

                    <View style={{marginLeft: 10}}>
                        <Image style={styles.ImovImg} source={props.image}/>   
                    </View>

                    <View style={{marginLeft: 20}}>

                        <Text style={{fontSize: 16, color: '#000', fontWeight: 400}}>{props.title}</Text>
                        <Text style={{fontSize: 12, color: '#0A8ED9', marginVertical: 3}}>{props.valor}</Text>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <FontAwesome style={{fontSize: 13, color: '#858585'}} name="bed" size={24} color="black" />
                                <Text style={{marginLeft: 5 , color: '#858585'}}>{props.description1}</Text>
                            </View>

                            <View style={{flexDirection: 'row',alignItems: 'center', marginLeft: 10}}>
                                <FontAwesome5 style={{fontSize: 13, color: '#858585'}} name="bath" size={24} color="black" />
                                <Text style={{marginLeft: 5, color: '#858585'}}>{props.description2}</Text>
                            </View>

                        </View>
                    </View>

                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    motherContain: {
        flexDirection: 'column',
        marginTop: '5%'
    },
    boxImov:{
        flexDirection: 'row',
        marginLeft: 25,
        width:420,
      },
      ImovImg:{
        width: 60,
        height: 60,
        borderRadius: 5,
      }
})

