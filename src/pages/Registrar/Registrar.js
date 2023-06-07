import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './RegistrarStyle';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Registrar() {

    const navigation = useNavigation()

  return ( 
    <View style={styles.body}>

        <TouchableOpacity onPress={()=> navigation.goBack()} style={{width: '100%', paddingLeft: 10, marginTop: 35}}>
            <AntDesign name="leftcircle" size={32} color="black" />
        </TouchableOpacity>

        <View style={styles.header}>
            <Text style={styles.h1}>Olá!</Text>
            <Text style={styles.p}>Crie uma nova conta</Text>
        </View>

        <View style={styles.input}>
            <TextInput
                placeholder='Nome do Usuário'
                style={styles.BoxInput}
            />
            <FontAwesome style={{fontSize: 20}} name="user" size={24} color="black" />
        </View>
        <View style={styles.input}>
            <TextInput
                placeholder='Email'
                style={styles.BoxInput}
            />
            <Ionicons style={{fontSize: 20}} name="ios-mail" size={24} color="black" />
        </View>

        <View style={styles.input}>
            <TextInput
                placeholder='Senha'
                secureTextEntry={true}
                style={styles.BoxInput}
            />
            <Entypo style={{fontSize: 20}} name="lock" size={24} color="black" />
        </View>

        <TouchableOpacity style={styles.Button}>
            <Text style={{color: '#fff', fontWeight: 500, fontSize: 16}}>Criar</Text>
        </TouchableOpacity>

        <View style={styles.Outro}>
            <View style={styles.Line}></View>
            <Text style={{marginHorizontal: 10}}>Or</Text>
            <View style={styles.Line}></View>
        </View>

        <View style={styles.Opcoes}>
            <TouchableOpacity>
                <AntDesign style={{color: '#0A8ED9'}} name="facebook-square" size={36} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign style={{color: '#0A8ED9'}} name="google" size={36} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign style={{color: '#0A8ED9'}} name="linkedin-square" size={36} color="black" />
            </TouchableOpacity>
        </View>

        <View style={styles.BoxConta}>
            <Text style={styles.Conta}>Não tem uma conta?</Text>
            <Text style={styles.Registrar}>Registre-se</Text>
        </View>

    </View>
  );
}
