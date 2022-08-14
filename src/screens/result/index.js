import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AppContext } from '../../context/AppContext';
import styles from './style';

const ResultScreen = ({ navigation }) => {
    const {
        query,
        list,
        setList,
        isLoading,
        currentPage,
        setIsLoading,
        setImageDetail,
        setCurrentPage
    } = useContext(AppContext)

    const getImages = () => {
        setIsLoading(true)
        axios.get(`https://pixabay.com/api/?key=29232900-86ed435f12fdd6829865b1d19&page=${currentPage}&q=${query.replace(/\s/g, '+')}&image_type=photo`)
            .then(res => {
                setList([...list, ...res?.data?.hits])
                setIsLoading(false)
            })
            .catch(err => {
                console.error("Failed to load images")
                setIsLoading(false)
            })
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setList([])
                    setImageDetail(item)
                    navigation.navigate('DetailsScreen')
                }}
            >
                <Image style={styles.imageItem} source={{ uri: item?.webformatURL }} />
            </TouchableOpacity>
        )
    }

    const loadMoreItem = () => {
        if (!isLoading)
            setCurrentPage(currentPage + 1)
    }

    useEffect(() => {
        if (currentPage != 1) getImages()
    }, [currentPage])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getImages()
            setCurrentPage(1)
        });
        return unsubscribe;
    }, [navigation, query])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Icon
                    onPress={() => {
                        setList([])
                        navigation.goBack()
                    }}
                    name="keyboard-backspace"
                    color="black"
                    size={30}
                />
                <Text style={styles.headerTitle}>Results</Text>
            </View>
            <Text>{`Keywords: ${query?.replace(/\s/g, '+')}`}</Text>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item?.id}
                onEndReached={loadMoreItem}
                ListFooterComponent={(
                    isLoading ? <View><Text>Loading</Text></View> : <View />
                )}
                ListEmptyComponent={
                    (!isLoading && !list.length) && <View><Text>No Result</Text></View>
                }
            />
        </SafeAreaView>
    );
};

export default ResultScreen;
