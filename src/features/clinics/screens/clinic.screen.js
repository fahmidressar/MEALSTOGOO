import React from 'react';
import {Searchbar} from 'react-native-paper';
import {StatusBar, StyleSheet, SafeAreaView, Text, View} from 'react-native';
import {ClinicInfo} from '../components/clinic-info.component';

export const ClinicsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search }>
      <Searchbar placeholder="cari"/>
    </View>
    <View style={ styles.list }>
      <ClinicInfo/>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: StatusBar.currentHeight},
  search: {padding: 16},
  list: {flex: 1, padding: 16},

});
