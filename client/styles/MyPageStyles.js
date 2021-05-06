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
});

export default styles;