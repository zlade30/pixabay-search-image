import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        height: 45,
        backgroundColor: '#57b057',
        borderRadius: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default styles;
