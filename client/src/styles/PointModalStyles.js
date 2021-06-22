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
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: '70%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 1,
        padding: 30,
        marginHorizontal: 80
      },

      selectTextCon: {
        display: 'flex',
        flexDirection: 'row',
        width: 200,
        justifyContent: 'space-around'
      },

      titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 20
      },

      doneText: {
        fontSize: 20,
        margin: 15,
        marginBottom: 20,
        color: '#35C9C9'
      },

      cancelText: {
        fontSize: 20,
        margin: 15,
        marginBottom: 20
      }
});

export default styles;