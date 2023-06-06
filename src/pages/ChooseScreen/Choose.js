import { View, TouchableOpacity,Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

export function Choose(){

    const navigation = useNavigation()

    const openLogin = () => {
        navigation.dispatch(CommonActions.navigate({
            name: 'Login'
        }))
    }

    const openRegistrar = () => {
        navigation.dispatch(CommonActions.navigate({
            name: 'Registrar'
        }))
    }

    return(
        <View>
            <TouchableOpacity onPress={()=> navigation.goBack()} style={{width: '100%', paddingLeft: 10, marginTop: 35}}>
                <AntDesign name="leftcircle" size={32} color="black" />
            </TouchableOpacity>
            <View style={{width: '50%', marginLeft: '25%', gap: 10, marginTop: '40%', height: 200, justifyContent: 'center', alignContent: 'center'}}>
                <TouchableOpacity onPress={openLogin} style={{alignItems: 'center', backgroundColor: '#D3D3D3', borderRadius: 10}}><Text style={{color: '#085886', fontSize: 30}}>Login</Text></TouchableOpacity>
                <TouchableOpacity onPress={openRegistrar} style={{alignItems: 'center', backgroundColor: '#D3D3D3', borderRadius: 10}}><Text style={{color: '#085886', fontSize: 30}}>Cadastro</Text></TouchableOpacity>
            </View>
        </View>

        
    );
}