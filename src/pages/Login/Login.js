import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './LoginStyle';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Login() {

    const navigation = useNavigation()

  return ( 
    <View style={styles.container}>

        <TouchableOpacity onPress={()=> navigation.goBack()} style={{width: '100%', paddingLeft: 10, marginTop: 35}}>
            <AntDesign name="leftcircle" size={32} color="black" />
        </TouchableOpacity>

        <View style={styles.header}>
            <Text style={styles.h1}>Seja Bem vindo(a)!</Text>
            <Text style={styles.p}>Entre para continuar</Text>
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
            <Text style={{color: '#fff', fontWeight: 500}}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.interrogacao}>Esqueceu a senha?</Text>

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
