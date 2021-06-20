import { StyleSheet ,Dimensions} from "react-native";


const styles = StyleSheet.create({

    headerContainer:{
        margin :0,
        flex : 0.5
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'Noto Sans KR',
    },
    topText:{    
        fontSize:Dimensions.get('window').width * 0.13,
        marginTop:Dimensions.get('window').height * 0.04,
        marginLeft:Dimensions.get('window').width * 0.1,
        fontWeight: 'bold',
        color:'#FFFFFF',
        textShadowColor:'#000000',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:5,
    },
    middleText:{
        marginLeft:Dimensions.get('window').width * 0.1,
        fontSize:Dimensions.get('window').width * 0.13,
        fontWeight: 'bold',
    },
    footerContainer:{
        flexDirection: 'row',
        flex : 0.8,
        marginTop : Dimensions.get('window').width * 0.01,
    },
    bottomText:{
        marginLeft:Dimensions.get('window').width * 0.1,
        fontSize:Dimensions.get('window').width * 0.13,
        fontWeight: 'bold',
        color:'#FFFFFF',
        textShadowColor:'#000000',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:5,
    },

    video_BN: {
        marginTop : Dimensions.get('window').width * 0.06,
        width: Dimensions.get('window').width * 0.7,
        height:  Dimensions.get('window').width * 0.85,
        position: 'absolute'
        
    },
    video_GN: {
        marginTop : Dimensions.get('window').width * 0.06,
        width: Dimensions.get('window').width * 0.7,
        height:  Dimensions.get('window').width * 0.85,
        position: 'absolute'
    },
    video_OY: {
        marginTop : Dimensions.get('window').width * 0.06,
        width: Dimensions.get('window').width * 0.7,
        height:  Dimensions.get('window').width * 0.85,
        position: 'absolute'
    },
    video_YG: {
        marginTop : Dimensions.get('window').width * 0.06,
        width: Dimensions.get('window').width * 0.7,
        height:  Dimensions.get('window').width * 0.85,
        position: 'absolute'
    },
    
    icon:{
        marginTop: Dimensions.get('window').width * 0.03,
        marginLeft: Dimensions.get('window').width * 0.1,
    },
    category_icon :{
        width: Dimensions.get('window').width * 0.18,
        height: Dimensions.get('window').width * 0.18,
        marginTop:16
        

    },
    map_icon :{
        width: Dimensions.get('window').width * 0.18,
        height: Dimensions.get('window').width * 0.18,
        marginTop: Dimensions.get('window').width * 0.05
    },
    qr_icon :{
        width: Dimensions.get('window').width * 0.18,
        height: Dimensions.get('window').width * 0.18,
        marginTop: Dimensions.get('window').width * 0.04
    },
    statistics_icon :{
        width: Dimensions.get('window').width * 0.182,
        height: Dimensions.get('window').width * 0.183,
        marginTop: Dimensions.get('window').width * 0.04
    }
});

export default styles;


