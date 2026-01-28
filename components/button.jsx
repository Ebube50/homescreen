import { Text, TouchableOpacity } from "react-native";


const Button = ({text, style}) =>{
    return(
        <TouchableOpacity style={{backgroundColor:'green', height:50, width:300, 
            alignSelf:"center", borderRadius:15, justifyContent:'center', ...style}}>
            <Text style={{fontSize:20, color:'white', alignSelf:'center'}}>
                {text}
            </Text>
        </TouchableOpacity>


    )
}
export default Button;