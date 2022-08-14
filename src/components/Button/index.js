import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;
