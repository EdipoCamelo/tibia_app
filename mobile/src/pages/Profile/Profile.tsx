/* eslint-disable import/no-unresolved */
import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import { Header } from 'react-native-elements';
import { styles } from './styles';

const Profile = ({ navigation }) => {
  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#6b6b6b"
        centerComponent={{ text: 'PROFILE', style: { color: '#fff' } }}
        rightComponent={{
          icon: 'home',
          color: '#fff',
          onPress: () => navigation.navigate('Home'),
        }}
      />

      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <LinearGradient style={styles.gradient} colors={['#fff', '#fff']}>
        {/* <Card style={styles.cardUser}></Card> */}
        <View>
          <Image
            source={require('../../assets/Images/avatar3.png')}
            style={styles.imageSS}
          />
        </View>

        <Text style={styles.textNameUser}>Lex Steele</Text>
        <Text style={styles.designer}>Player Level 75</Text>

        <ScrollView />
      </LinearGradient>
    </View>
  );
};

export default Profile;
