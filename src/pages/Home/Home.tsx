import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Header } from 'react-native-elements'

const Home = ({ navigation }) => {

    const { colors } = useTheme();

    const theme = useTheme();



    return (

        <View style={styles.container}>
            <Header
                backgroundColor='#6b6b6b'
                centerComponent={{ text: 'HOME', style: { color: '#fff' } }}
            />

            <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />

        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },

    textTitle: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#5f5f5f',

    },
});