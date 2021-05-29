import { StyleSheet } from "react-native";

const mainColor = "#E1F0FF";
const btnColor = "#A0CAF3";

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: mainColor,
    },
    header:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    main_text:{
        fontSize:35,
        fontWeight:'bold',
        color:'#000'
    },
    sub_text:{
        fontSize:28,
        color:'#000'
    },  
    footer:{
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginHorizontal: 20,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    register_text:{
        fontSize:25,
        marginTop:40,
        alignSelf:'center',
        fontWeight:'bold'
    },
    input_box:{
        marginVertical:40,
        marginHorizontal:20
    },
    input_text:{
        fontWeight:'bold',
        marginBottom:15
    },
    input:{
        borderBottomColor:mainColor,
        borderBottomWidth:1,
        marginBottom:20,
        opacity:0.6,
        paddingBottom:10
    },
    register_btn:{
        backgroundColor:btnColor,
        borderRadius:10,
        height:55,
        marginTop:70,
    }

});

export default styles;