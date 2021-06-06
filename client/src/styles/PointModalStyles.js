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