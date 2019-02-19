import React from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
  Text,
  ScrollView,
  StyleSheet,
  Buttons
} from 'react-native';

export default class DiscoverScreen extends React.Component {
  static navigationOptions = {
    title: 'Discover',
  };

  constructor(props) {
    super(props);
  }

  render(){
      return(
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
          >
            <Text> Company </Text>
          </TouchableOpacity>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'nunito',
    fontSize: 20,
  },
  container: {
    fontFamily: 'nunito',
  },
  button: {
    fontFamily: 'nunito',
  },
});
