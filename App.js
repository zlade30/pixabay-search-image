import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/search';
import ResultScreen from './src/screens/result';
import DetailsScreen from './src/screens/details';
import AppProvider from './src/context/AppContext';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AppProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="SearchScreen"
                        component={SearchScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="DetailsScreen"
                        component={DetailsScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ResultScreen"
                        component={ResultScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AppProvider>
    );
}
