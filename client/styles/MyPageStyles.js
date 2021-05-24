import { StyleSheet } from "react-native";

const mainColor = "#E1F0FF";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
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
        flexDirection: 'column',
        width: 600,
        alignItems: 'center',
        marginTop: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.24,
        shadowRadius: 10.32,
        elevation: 16,
        borderRadius: 10,
    },
    cateFirst: {
        flexDirection: 'row',
        margin: 20,
    },
    cateSecond: {
        flexDirection: 'row',
        margin: 20,
    },
    cate: {
        margin:20,
        borderColor: '#000',
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