import { 
    StyleSheet,
    Dimensions
} from "react-native";

const mainColor = "#E1F0FF";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    Container: {
        fontFamily: 'Noto Sans KR',
    },

    firCon: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 50,
    },

    staContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 220,
    },

    contentCon: {
        width: '44%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.55,
        shadowRadius: 16,

        elevation: 25,
        borderRadius: 20,
        backgroundColor: '#fff',
    },

    totalCon: {
        flexDirection: 'column',
        paddingLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text_total: {
        fontSize: 55,
        fontWeight: 'bold',
        margin:10
    },

    text_created: {
        fontSize: 28
    },

    line: {
        width:3,
        height:'100%',
    },

    lineBox: {
        padding: 50,
        marginTop: 40,
    }

});

export default styles;