import { StyleSheet, Text, TextInput, View } from "react-native";


const Input=({placeholder, label, ktype})=>{

    return(
        <View style={styles.container}>
            <Text style={{marginBottom:3, marginTop:10, paddingLeft:6}}>{label}</Text>

            <TextInput style={{backgroundColor:'white', paddingLeft:10, marginBottom:5,}} keyboardType={ktype} 
            placeholder={placeholder}/>


        </View>
        


    )

}

const styles=StyleSheet.create({

    container:{
        //backgroundColor:'grey',
        //borderRadius:12

    }
})

export default Input;