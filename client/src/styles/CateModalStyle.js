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
        backgroundColor: 'rgba(0,0,0,0.5)',
      },

      modal: {
        marginHorizontal: 80,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        marginTop: '20%',
        backgroundColor: 'white',
        height: '80%',
      },

      headContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 20,
        paddingLeft: 80
      },

      headCon: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: '100%'
      },  

      cateContainer: {
        width: '100%',
        paddingLeft: 50,
        marginTop: 20
      },

      cateCon: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 25,
    },

    cateTextView: {
        flexDirection:'column',
        alignItems: 'flex-start'
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