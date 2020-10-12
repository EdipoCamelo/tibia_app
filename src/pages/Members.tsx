import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

// import { Container } from './styles';

const Members = ({ navigation }) => {

    const { colors } = useTheme();

    const theme = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
            <Text style={{ color: colors.text }}>Veja aqui a lista de Membros</Text>
            <Button
                title="Ir para tela Amigos"
                onPress={() => navigation.navigate("Friends")}
            />
        </View>
    );
};



export default Members;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});