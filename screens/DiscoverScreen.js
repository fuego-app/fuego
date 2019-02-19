import React from 'react';
import { Image, TouchableOpacity, View, FlatList, ActivityIndicator, Text, ScrollView, StyleSheet } from 'react-native';

export default class DiscoverScreen extends React.Component {
  static navigationOptions = {
    title: 'Discover',
  };

  render(){
      return(
        <View style={styles.title}>
            <Text>
                Discover foobar
            </Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
  },
});
