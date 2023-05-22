import { StatusBar } from 'expo-status-bar';
import { Home } from './src/pages/Home/Home';
import { DreamsVilleHouse } from './src/pages/DreamsVilleHouse/dreamsVilleHouse';

export default function App (){

  return(
    <>
    <StatusBar style="auto" />


     <Home />  
    {/* <DreamsVilleHouse />  */}

    
    </>
  )
}