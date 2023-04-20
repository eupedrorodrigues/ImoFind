import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center'
  },

  header: {
    marginTop: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center' // tentar space-between
  },

  arrowIcon: {
    width: 34,
    height: 34,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    zIndex: 100,
    left: 50,
    top: 20
  },

  favoriteIcon: {
    width: 34,
    height: 34,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    right: 50,
    top: 20
  },

  upIMG: {
    width: '88%', //335,
    borderRadius: 20,
  },

  // imgDescriptionName: {
  //   top: 211,
  //   position: 'absolute'
  // },

  // imgDescriptionBenefits: {
  //   flexDirection: 'row',
  //   position: 'absolute',
  //   // zIndex: 100
  // },

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
    width: '100%',
    marginHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row'
  },

  footerBTN: {
    marginLeft: 80,
    elevation: 5,
    backgroundColor: 'red'
  }
})