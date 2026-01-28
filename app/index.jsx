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
      <Pannel2/>
      <Pannel2/>


        </View>

       



      </ScrollView>

      

      
 
    </SafeAreaView>
  )

}
