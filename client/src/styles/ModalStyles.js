import { 
    StyleSheet,
    Dimensions
} from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'transparent'
      },
      background: {
        position: 'absolute',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      modal: {
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: '50%',
        backgroundColor: 'white'
      },
      doneText: {
        fontSize: 15,
        margin: 15,
        marginBottom: 20
      },
      titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 20
      },
      subText: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 12
      }
});

export default styles;