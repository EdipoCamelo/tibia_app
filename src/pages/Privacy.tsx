import React from 'react';
import { View, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Header, Text } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';


const Privacy = ({ navigation }) => {

    const { colors } = useTheme();

    const theme = useTheme();

    const [checked, setChecked] = React.useState(false);


    return (

        <View style={styles.container}>
            <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
            <Header
                backgroundColor='#6b6b6b'
                centerComponent={{ text: 'PRIVACY', style: { color: '#fff' } }}
                rightComponent={{
                    icon: 'home',
                    color: '#fff',
                    onPress: () => navigation.navigate("Home"),
                }}
            />

            <Text style={{ color: '#6b6b6b', marginTop: '5%', marginLeft: '2%' }} h5>Leia o texto abaixo para entender como a Empresa XPTO irá utilizar seus dados.</Text>

            <Checkbox
                color='#000'
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
            />



        </View>
    );
};

export default Privacy;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },


});