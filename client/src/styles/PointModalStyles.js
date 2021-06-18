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
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: '70%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 1
      },

      selectTextCon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      },

      titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 20
      },

      doneText: {
        fontSize: 15,
        margin: 15,
        marginBottom: 20,
        color: '#35C9C9'
      },

      cancelText: {
        fontSize: 15,
        margin: 15,
        marginBottom: 20
      }
});

export default styles;