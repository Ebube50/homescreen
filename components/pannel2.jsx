import { Image, StyleSheet, Text, View } from "react-native";

const Pannel2=({text, des, tym})=>{
    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/woman.png')} style={{height:40, width:40,  
            marginLeft:10, marginTop:-300
                }}/>


            <Text style={{fontSize:17, fontWeight:'500', color:'black', marginLeft:60, marginTop:-45}}>
                {text}
            </Text>
             <Text style={{fontSize:13, fontWeight:'450', color:'black', marginLeft:60, marginTop:-5}}>
                {des}
            </Text>
             <Text style={{fontSize:12, fontWeight:'450', color:'black', marginLeft:60, marginTop:-5}}>
                {tym}
            </Text>
        </View>


    )
}

const styles =StyleSheet.create({
        container:{
          marginTop:-23,
            backgroundColor:'#ffffff',
           justifyContent:'center',
           height: 370,
        }

    })

export default Pannel2;