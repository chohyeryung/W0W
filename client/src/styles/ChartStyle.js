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

    staContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 140,
    },

    contentCon: {
        width: '45%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        shadowColor: "rgb(50,50,50)",
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
        justifyContent: 'space-around',
    },

    text_total: {
        fontSize: 28,
        fontWeight: 'bold'
    },

    text_created: {
        fontSize: 18,
    },

    line: {
        width:3,
        height:'100%',
    },

    lineChart: {
        
    },


});

export default styles;