import { 
    StyleSheet,
    Dimensions
} from "react-native";

const mainColor = "#E1F0FF";
const { width, height } = Dimensions.get('window');

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
        width: Dimensions.get('window').width,
    },

    cateCon: {
        borderWidth: 2,
        borderRadius: 5,
        borderStyle: 'solid',
        width: Dimensions.get('window').width,
    },
    // cateContainer: {
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     marginTop: 60,
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 3,
    //     },
    //     shadowOpacity: 0.24,
    //     shadowRadius: 10.32,
    //     elevation: 16,
    //     borderRadius: 10,
    // },
    // cateFirst: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     margin: 20,
    // },
    // cateSecond: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     margin: 20,
    // },
    // cateCon: {
    //     margin:20,
    // },
    // text_count: {
    //     color:'#fff',
    //     backgroundColor: mainColor, 
    //     fontSize:36,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     width: 100,
    //     height: 100,
    // },
    // text_title: {
    //     color:'#000',
    //     fontSize: 25,
    //     textAlign: 'center',
    //     fontWeight: 'bold',
    // }
});

export default styles;