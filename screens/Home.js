import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Constants from 'expo-constants'


import Story from '../components/Story';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" backgroundColor="white" />
        <ScrollView style={styles.scrollView}>
            <Story />
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight + 10
  },
  scrollView: {
    // backgroundColor: 'pink',
    // marginHorizontal: 20,
  },
});
