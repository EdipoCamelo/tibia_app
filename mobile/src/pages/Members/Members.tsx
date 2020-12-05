import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Header } from 'react-native-elements';

const Members = ({ navigation }) => {
  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#6b6b6b"
        centerComponent={{ text: 'MEMBERS', style: { color: '#fff' } }}
        rightComponent={{
          icon: 'home',
          color: '#fff',
          onPress: () => navigation.navigate('Home'),
        }}
      />

      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
    </View>
  );
};

export default Members;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
});
