import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    headerContainer:{
        margin :0,
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'Noto Sans KR',
    },
    topText:{
    
        fontSize:100,
        marginTop:40,
        marginLeft:90,
        fontWeight: 'bold',
        color:'#FFFFFF',
        textShadowColor:'#000000',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:5,
    },
    middleText:{
        marginLeft:90,
        fontSize:100,
        fontWeight: 'bold',
        
       
    },
    video_BN: {
        marginTop:45,
        width: 600,
        height: 624,
        position: 'absolute'
        
    },
    video_GN: {
        marginTop:45,
        width: 600,
        height: 624,
        position: 'absolute'
    },
    video_OY: {
        marginTop:45,
        width: 590,
        height: 654,
        position: 'absolute'
    },
    video_YG: {
        marginTop:45,
        width: 600,
        height: 624,
        position: 'absolute'
    },
    footerContainer:{
        flexDirection: 'row'
    },
    bottomText:{
        marginLeft:90,
        fontSize:100,
        fontWeight: 'bold',
        color:'#FFFFFF',
        textShadowColor:'#000000',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:5,
    },
    icon:{
        marginTop:30,
        marginLeft:90
    },
    category_icon :{
        width:140,
        height:140,
        marginTop:16
        

    },
    map_icon :{
        width:140,
        height:140,
        marginTop:32
    },
    qr_icon :{
        width:140,
        height:140,
        marginTop:32
    },
    statistics_icon :{
        width:140,
        height:140.5,
        marginTop:32
    }
});

export default styles;


