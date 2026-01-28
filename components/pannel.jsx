import { Image, StyleSheet, TextInput, View } from "react-native";

const Pannel=({value})=>{
    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/woman.png')} style={{height:30, width:30, marginTop:5, 
            marginLeft:10
                }}/>

                <TextInput  placeholderTextColor={'white'} placeholder={value} style={{
                borderColor:'white', paddingLeft:'20', color:'white',
                borderWidth:1, fontSize:14, width:'auto', borderRadius:14, 
                marginLeft:50, marginTop:-35, marginRight:55
                }}/>

               <Image source={require('../assets/images/chat.png')} style={{ height:30, width:30, 
               marginTop:-33, alignSelf:'flex-end', marginRight:12
            
                }}/>

        </View>


    )
}

const styles =StyleSheet.create({
        container:{
           marginTop:10, 
            backgroundColor:'#212029',
           justifyContent:'center',
           height: 60,
        }

    })

export default Pannel;