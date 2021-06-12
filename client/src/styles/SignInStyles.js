import { Dimensions, StyleSheet } from "react-native";

const mainColor = "#35C9C9";

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 70,
        paddingVertical: 70,
        fontFamily: 'Noto Sans KR',
        justifyContent: 'space-between',
    },
    header: {
        flex: 1,
    },
    main_text: {
        color: mainColor,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    sub_text: {
        color: '#000000',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 60,
    },
    text_title: {
        fontSize: 22,
    },
    input_text: {
        fontWeight: 'bold',
    },
    text_input: {
        fontSize: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 6,
        borderColor: '#000000',
        height: 70,
        borderWidth: 1,
    },
    login_btn: {
        marginTop: 70,
        backgroundColor: '#000000',
        height: 70,
        borderRadius: 10,
        alignItems: 'center',
    }
});

export default styles;