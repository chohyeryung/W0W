import { StyleSheet } from "react-native";

const mainColor = "#E1F0FF";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 5,
        marginTop:45,
        paddingHorizontal:70,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    backIcon: {
        flex: 1,
        color:'#000',
    },
    topTitle: {
        flex:1,
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    cateContainer: {
        flex:1,
        flexDirection: 'column',
    },
    cateFirst: {
        flex:1,
        flexDirection: 'row',
    },
    cateSecond: {
        flex:1,
        flexDirection: 'row',
    },
    cate: {
        margin:20,
    },
    text_count: {
        color:'#fff',
        backgroundColor: mainColor, 
        fontSize:36,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 100,
        height: 100,
    },
    text_title: {
        color:'#000',
        fontSize: 32,
        fontWeight: 'bold',
    }
});

export default styles;