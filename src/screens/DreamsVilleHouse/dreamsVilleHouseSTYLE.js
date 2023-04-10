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
    marginLeft: 10,
    position: 'absolute',
    zIndex: 100,
  },

  favoriteIcon: {
    width: 34,
    height: 34,
    backgroundColor: 'red',
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute'
  },

  upIMG: {
    width: '80%',
    borderRadius: 20,
    
  },

  imgDescriptionName: {
    top: 211,
    position: 'absolute'
  },

  imgDescriptionBenefits: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 100
  }

})