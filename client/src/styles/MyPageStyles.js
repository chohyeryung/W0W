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
        width: 130,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        fontSize: 50,
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
        shadowColor: "#e3e7e8",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5.00,
        
        elevation: 24,
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