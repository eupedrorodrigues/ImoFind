import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home/Home';
import { DreamsVilleHouse } from './src/screens/DreamsVilleHouse/dreamsVilleHouse';

export default function App (){

  return(
    <>
    <StatusBar style="auto" />


     <Home />  
    {/* <DreamsVilleHouse />  */}

    
    </>
  )
}