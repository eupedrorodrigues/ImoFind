import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    motherBoxHeader: {
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        marginBottom: 20
      },
      escolher:{
        alignItems: 'center',
        flexDirection: 'row'
      },
      notification:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent:'center'
      },
      containerInput:{
        flexDirection: 'row', 
        width: 338, 
        marginBottom: 20, 
        borderRadius: 5, 
        backgroundColor: '#f2efef',
        marginVertical: 10
      },
      boxInput:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 48,
        borderRadius: 10,
      },
      input:{
        marginLeft:5,
        width: '80%'
      },
      OpcoesImov:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal: 12,
        marginTop: 5
      },

})