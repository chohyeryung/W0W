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
        borderRadius: 10,
        alignItems: 'center',
        marginTop: '10%',
        backgroundColor: 'white',
        height: '90%',
      },
});

export default styles;