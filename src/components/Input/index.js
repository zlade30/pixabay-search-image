import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';


const SearchField = ({ label, ...props }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.field}>
                <Icon name="magnify" color="#212121" size={20} />
                <TextInput
                    style={styles.input}
                    {...props}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
        </View>
    );
};

export { SearchField };
