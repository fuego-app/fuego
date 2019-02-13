import React from 'react';
import { Image, TouchableOpacity, View, FlatList, ActivityIndicator, Text, ScrollView, StyleSheet } from 'react-native';

export default class DiscoverScreen extends React.Component {
  static navigationOptions = {
    title: 'Discover',
  };

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
  }
}
