import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Header, Text } from 'react-native-elements';

const Groups = ({ navigation }) => {
  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Header
        backgroundColor="#6b6b6b"
        centerComponent={{ text: 'PRIVACY POLICY', style: { color: '#fff' } }}
        rightComponent={{
          icon: 'home',
          color: '#fff',
          onPress: () => navigation.navigate('Home'),
        }}
      />
      <Text style={styles.title}>Terms and conditions</Text>
    </View>
  );
};

export default Groups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    alignSelf: 'center',
  },
});
