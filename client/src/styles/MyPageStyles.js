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
    },

    headerContainer: {
        marginTop:50,
        paddingHorizontal:80,
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    headThCon: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    iconCon: {
        width: 115,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },

    backIcon: {
        flex: 1,
        color:'#000',
    },
    topTitle: {
        fontSize: 45,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 45,
        fontWeight: 'bold',
        color:'#fff',
        textShadowColor:'#000',
        textShadowOffset:{width: 0, height: 0},
        textShadowRadius:2
    },

    conCon: {
        flex:1,
        justifyContent: 'center',
    },

    cateContainer: {
        margin:80,
        marginTop: 55,
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
        height: 900,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#fff'
    },

    cateCon: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#CFCFCF',
        paddingTop: 30,
        paddingBottom: 65,
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
    },

    text_title: {
        color:'#000',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default styles;