import { Image, StyleSheet, Text, View } from "react-native";

const Pannel2=({text, des, tym, tym2, con, body})=>{
    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/woman.png')} style={{height:40, width:40,  
            marginLeft:15,  
                }}/>


            <Text style={{fontSize:17, fontWeight:'800', color:'white', marginLeft:60, marginTop:-45,}}>
                {text} <Text style={{fontSize:16, fontWeight:'500', color:'#a5a6a5', alignSelf:'flex-end',}}>
                 • {tym2}
            </Text>   
            </Text>
            <Text style={{fontSize:18, fontWeight:'600', color:'#73b6ff', alignSelf:'flex-end', marginTop:-22, paddingRight:12}}>
                {con}
            </Text>   
          
            <Text style={{fontSize:13, fontWeight:'450', color:'white', marginLeft:60,}}>
                {des}
            </Text>
             <Text style={{fontSize:12, fontWeight:'450', color:'white', marginLeft:60, }}>
                {tym} •
            </Text>
            <Text style={styles.bodyStyle}>
                {body}
            </Text>

           
        </View>



    )
}

const styles =StyleSheet.create({
        container:{
            backgroundColor:'#212029',
           paddingTop:15,
           height: 400,
        },

        bodyStyle:{
            textAlign:'left',
            color:'white',
            marginLeft:15,
            marginRight:15
        }

    })

export default Pannel2;