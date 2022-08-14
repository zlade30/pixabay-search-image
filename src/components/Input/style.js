import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    field: {
        backgroundColor: '#F2F2F2',
        borderRadius: 45,
        display: 'flex',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },
    label: {
        color: '#737885',
        fontSize: 16,
        marginBottom: 6,
    },
    input: {
        marginLeft: 10,
        width: '85%'
    }
});

export default styles;
