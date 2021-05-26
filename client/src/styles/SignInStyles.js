import { StyleSheet } from "react-native";

const mainColor = "#E1F0FF";
const btnColor = "#A0CAF3";

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: mainColor,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    main_text: {
        color: '#000000',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
    },
    sub_text: {
        color: '#000000',
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 10
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginHorizontal: 20,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    input_box: {
        marginHorizontal: 10,
    },
    sign_in_text: {
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
    },
    input_text: {
        fontWeight: 'bold',
    },
    text_input: {
        borderBottomColor: mainColor,
        borderBottomWidth: 1,
        paddingBottom: 5,
        opacity: 0.5,
    },
    login_btn: {
        marginTop: 70,
        backgroundColor: btnColor,
        height: 50,
        borderRadius: 10,
    }
});

export default styles;