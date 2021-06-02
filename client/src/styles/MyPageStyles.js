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
        flexDirection:'column',
        justifyContent: 'flex-start',
    },
    backIcon: {
        flex: 1,
        color:'#000',
    },
    topTitle: {
        fontSize: 38,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'#FFFFFF',
        fontFamily:'Times New Roman',
        textShadowColor:'#000000',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:5,
    },

    cateContainer: {
        width: Dimensions.get('window').width,
    },

    cateCon: {
        borderWidth: 2,
        borderRadius: 5,
        borderStyle: 'solid',
        margin: 20,
        width: 200,
        height: 200,
        padding: 20,
        textAlign: 'center',
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
    text_count: {
        color:'#000',
        fontSize:36,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text_title: {
        color:'#000',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default styles;