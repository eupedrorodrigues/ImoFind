import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  Exibir:{
    width: 330,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
    marginBottom: 50,
  },

  BoxIcons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20, 
    marginBottom: 180
  },


  LinearGradient:{
    width: 350, 
    height: 320, 
    borderRadius: 10
  },

  descriptionContainer:{
    width: '100%',
    top: 10,
    marginTop: 10,
    paddingHorizontal: 20,
    
  },

  proprietarioBox: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  proprietarioText: {
    marginLeft: 15,
  },

  proprietarioIcon: {
    width: 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 80
  },

  galeriaTitle: {
    fontSize: 16, 
    fontWeight: 'bold', 
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 20
  },

  scrolledImg: {
    marginLeft: 20,
    justifyContent: 'center',
  },

  IMG: {
    borderRadius: 5,
    width: 72,
    height: 72
  },

  footer: {
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 180,
    zIndex: 100,
    flexDirection: 'row',
  },

  footerBTN: {
    elevation: 5,
    backgroundColor: 'red'
  }
})