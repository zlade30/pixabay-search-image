import React, { useContext } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AppContext } from '../../context/AppContext';
import styles from './style';

const DetailsScreen = ({ navigation }) => {
    const {
        setQuery,
        imageDetail,
    } = useContext(AppContext)

    const Tag = ({ value, onPress }) => (
        <TouchableOpacity style={styles.tagContainer} onPress={onPress}>
            <Text style={styles.tagText}>{value}</Text>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.authorPanel}>
                    <Icon onPress={() => navigation.goBack()} name="keyboard-backspace" color="black" size={30} />
                    <Text style={styles.headerTitle}>{imageDetail?.user}</Text>
                </View>
                <ScrollView contentContainerStyle={styles.tagsPanel} horizontal>
                    {imageDetail?.tags?.replace(/\s/g, '')?.split(',')?.map(item => (
                        <Tag
                            key={item}
                            value={item}
                            onPress={() => {
                                setQuery(item)
                                navigation.navigate('ResultScreen')
                            }}
                        />
                    ))}
                </ScrollView>
            </View>
            <Image style={styles.image} source={{ uri: imageDetail?.largeImageURL }} />
        </SafeAreaView>
    );
};

export default DetailsScreen;
