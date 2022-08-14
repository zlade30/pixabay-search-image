import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10
    },
    headerTitle: {
        marginLeft: 10,
        fontSize: 20,
        color: 'black',
    },
    imageItem: {
        width: '100%',
        height: 200
    }
});

export default styles;
