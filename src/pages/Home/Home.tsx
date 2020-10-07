
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';


const Home: React.FC = () => {

    return (

        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Home</Text>
            <Text style={styles.sectionDescription}>Você está na HOME</Text>
        </View>
    );
};


export default Home;