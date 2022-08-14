import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        position: 'relative',
    },
    headerContainer: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        color: 'white',
    },
    authorPanel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    tagsPanel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    headerTitle: {
        marginLeft: 10,
        fontSize: 20,
        color: 'black',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    tagContainer: {
        borderRadius: 6,
        backgroundColor: '#57b057',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 10,
    },
    tagText: {
        color: 'white',
    }
});

export default styles;
