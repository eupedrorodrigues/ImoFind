import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',  
  },  
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
    alignItems: 'center',
    justifyContent:'center'
  },
  boxSettings:{
    width: 48,
    height: 48,
    backgroundColor: '#A0DAFB',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10, 
    marginLeft:2
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
    width: 310, 
    height: 41,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  boxScrollHorizontal:{
    width: 340,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  ScrollHori:{
    marginTop: 30,
    width: '100%',
    padding: 10,
  },
  boxImage:{
    marginLeft: 80,
    width: 222,
    height: 255,
    justifyContent: 'center',
    borderRadius: 20,
  },
  HouseImg:{
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    
  },
  boxImageMovH:{
    marginLeft: 20,
    width: 222,
    height: 255,
    justifyContent: 'center',
  },
  OpcoesListadas:{
    alignItems: 'center',
    width: 332, 
    height: 41,
    marginTop: 5,
    flexDirection: 'row',
    alignItems:'center',
    marginHorizontal:15,
    justifyContent:'space-between',
  },
  boxImov:{
    flexDirection: 'row',
    marginTop: 20,
    width:340,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  

});