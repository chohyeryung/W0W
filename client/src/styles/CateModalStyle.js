import { 
    StyleSheet,
    Dimensions
} from "react-native";


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent'
      },

      background: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
      },

      modal: {
        marginHorizontal: 60,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        marginTop: '20%',
        backgroundColor: 'white',
        height: '80%',
        padding: 10
      },

      headContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%'
      },

      headCon: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        width: '100%'
      },  

      cateContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 50
      },

      cateCon: {
        paddingTop: 30,
        paddingBottom: 30,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    cateImage: {
        marginLeft: 50,
        marginRight: 50
    },

    cateTextView: {
        flex:1,
        flexDirection:'column',
        alignItems: 'center'
    },

    text_explan: {
        color:'#898998',
        fontSize:15,
        textAlign: 'center'
    },

    text_title: {
        color:'#000',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default styles;