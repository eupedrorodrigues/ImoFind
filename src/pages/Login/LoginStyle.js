import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: '28%',
      },
      header: {
        alignItems: 'flex-start',
        marginRight: '15%',
        marginBottom: '25%'
      },
      h1:{
        fontSize: 38,
        fontWeight: 'bold'
      },
      p:{
        fontSize: 18,
        color: '#666666'
      },
      input:{
        width: 310,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        marginBottom: '12%'  
      },
      BoxInput: {
        width: 285,
      },
      Button:{
        backgroundColor: '#0A8ED9',
        width: 205,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginBottom: '3%'
      },
      interrogacao:{
        justifyContent: 'center',
        fontWeight: 600, 
        marginBottom: '15%'
      },
      Outro:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '15%'
      }, 
      Line:{
        width: 100,
        borderBottomWidth: 1,
        color: 'black'
      }, 
      Opcoes:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 200,
        height: 50,
        marginBottom: '25%'
      }, 
      BoxConta:{
        flexDirection: 'row'
      },
      Conta:{
        fontWeight: 'bold'
      },
      Registrar:{
        fontWeight: 'bold', 
        color: '#085886'
      }
})