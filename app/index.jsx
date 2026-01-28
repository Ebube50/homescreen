import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pannel from "../components/pannel";
import Pannel2 from "../components/pannel2";

export default function Index() {

  return (
    <SafeAreaView style={{backgroundColor:'#eeeeee', flex:1, }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{gap:30}}>

      <Pannel value={'Search'}/>
      <Pannel2 text={'Ebuka Chukwu'} des={'Data Analyst'} tym={'5h'}/>
      <Pannel2 text={'Emeka Okonwko'} des={'Civil Engineer'} tym={'10h'}/>
      <Pannel2 text={'Cynthia Ukon'} des={'Project Manager'} tym={'2Days'}/>
      <Pannel2 text={'Sunday Emefor'} des={'Teacher|UI/UX'} tym={'5h'}/>
      <Pannel2 text={'Chioma Nnaji'} des={'Programmer/Phyton'} tym={'3h'}/>
      <Pannel2 text={'Tochukwu Okoli'} des={'Investor/Strategist'} tym={'22h'}/>
      <Pannel2 text={'Tony Ngwa'} des={'Builder'} tym={'1day'}/>
      <Pannel2 text={'Faith Gift'} des={'Graphic Designer'} tym={'16h'}/>
      <Pannel2 text={'Iyke Solomon'} des={'Motion Design Expert'} tym={'2h'}/>
      <Pannel2 text={'Pascal Remi'} des={'Brand Strategist'} tym={'7h'}/>
      <Pannel2 text={'Progress Unu'} des={'Fitness Coach'} tym={'12h'}/>
    


        </View>

       



      </ScrollView>

      

      
 
    </SafeAreaView>
  )

}
