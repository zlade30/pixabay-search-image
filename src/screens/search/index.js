import React, { useContext, useEffect } from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import styles from './style';
import { SearchField } from '../../components/Input';
import Button from '../../components/Button';
import { AppContext } from '../../context/AppContext';

const SearchScreen = ({ navigation }) => {
    const { query, setQuery } = useContext(AppContext)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setQuery('')
        });
        return unsubscribe;
    }, [navigation])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/pixabay-banner.png')}
                />
                <SearchField placeholder="Search Images" value={query} onChangeText={(value) => setQuery(value)} />
                <View style={styles.btnContainer}>
                    <Button
                        text="Search"
                        onPress={() => {
                            if (query) 
                                navigation.navigate('ResultScreen')
                            else
                                alert("Input keyword is required")
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SearchScreen;
