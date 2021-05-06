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
        flexDirection:"row",
        justifyContent: "space-between",
    },
    backIcon: {
        flex: 1,
        color:"#000000",
    },
    topTitle: {
        flex:4,
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
    },

    text_count: {
        color:'#fff', 
        fontSize:36,
        fontWeight: 'bold',
    },
    text_title: {
        color:'#000',
        fontSize: 32,
        fontWeight: 'bold',
    }
});

export default styles;