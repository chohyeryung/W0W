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
        fontFamily: 'Noto Sans KR',
        // alignItems: 'center',
    },
    headerContainer: {
        marginTop:45,
        paddingHorizontal:70,
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
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
        textShadowColor:'#000000',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:5,
    },

    cateContainer: {
        margin:80,
        padding: 50,
        shadowColor: "rgb(50,50,50)",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.55,
        shadowRadius: 16,

        elevation: 25,
        borderRadius: 20,
    },

    cateCon: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: 'gray',
        padding: 30,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    cateTextView: {
        flex:1,
        flexDirection:'column',
        alignItems: 'center',
    },

    text_count: {
        color:'#898998',
        fontSize:15,
        fontFamily: 'Noto Sans KR',
    },

    text_title: {
        color:'#000',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default styles;