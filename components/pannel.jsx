import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const Pannel=({text, value})=>{
    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/woman.png')} style={{height:30, width:30, marginTop:40, 
            marginLeft:10
                }}/>

                 

                <TextInput  placeholderTextColor={'black'} placeholder={value} style={{borderColor:'black',
                borderWidth:.5, fontSize:10, width:220,height:32, borderRadius:30, marginLeft:55, marginTop:-35, 
                paddingLeft:10, paddingTop:10, 
                }}/>

               <Image source={require('../assets/images/chat.png')} style={{ height:40, width:40, 
               marginTop:-33, marginLeft:290
            
                }}/>

            <Text style={{fontSize:30, color:'white'}}>
                {text}
            </Text>
        </View>


    )
}

const styles =StyleSheet.create({
        container:{
           marginTop:10,
            backgroundColor:'#ffffff',
           justifyContent:'center',
           height: 60,
        }

    })

export default Pannel;