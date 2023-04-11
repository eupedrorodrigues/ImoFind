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
    backgroundColor: '#C6C6',
    justifyContent: 'center' // tentar space-between
  },

  arrowIcon: {
    width: 34,
    height: 34,
    backgroundColor: 'red',// #e2e6e7
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
    backgroundColor: 'red',
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    right: 50,
    top: 20
  },

  upIMG: {
    width: 335,
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
    backgroundColor: 'gray'
  },

  proprietarioText: {
    marginLeft: 15,
    backgroundColor: 'orange'
  },

  proprietarioIcon: {
    width: 100,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'space-around',
    marginLeft: 100
  },

  galeriaTitle: {
    fontSize: 16, 
    fontWeight: 'bold', 
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 20
  },

  scrollView: {
    backgroundColor: 'gray',

  },

  scrolledImg: {
    marginLeft: 20,
    // width: 222,
    // height: 255,
    justifyContent: 'center',
  },

  IMG: {
    borderRadius: 5,
    width: 72,
    height: 72
  }
})