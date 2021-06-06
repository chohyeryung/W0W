import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    headerContainer:{
        margin :50,
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'Noto Sans KR',
    },
    topText:{
        fontSize:100,
        marginTop:40,
        marginLeft:70,
        fontWeight: 'bold',
        color:'#FFFFFF',
        textShadowColor:'#000000',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:5,
    },
    middleText:{
        marginLeft:70,
        fontSize:100,
        fontWeight: 'bold',
       
    },
    bottomText:{
        marginLeft:70,
        fontSize:100,
        fontWeight: 'bold',
        color:'#FFFFFF',
        textShadowColor:'#000000',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:5,
    },
    icon:{
        margin:20,
        marginLeft:70
    },
    category_icon :{
        width:140,
        height:140,
        margin:16

    },
    map_icon :{
        width:140,
        height:140,
        margin:16
    },
    qr_icon :{
        width:140,
        height:140,
        margin:16
    },
    statistics_icon :{
        width:140,
        height:140,
        margin:16
    }
});

export default styles;


