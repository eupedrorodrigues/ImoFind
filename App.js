import { StatusBar } from 'expo-status-bar';
import { Home } from './Home';
import { DreamsVilleHouse } from './src/screens/DreamsVilleHouse/dreamsVilleHouse';

export default function App (){

  return(
    <>
    <StatusBar style="auto" />
    <DreamsVilleHouse />
    {/* <Home /> */}
    </>
  )
}