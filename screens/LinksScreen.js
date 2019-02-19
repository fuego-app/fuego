import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, FlatList, ActivityIndicator, Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://raw.githubusercontent.com/fuego-app/fuego/master/testCouponList.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.coupons,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =>  <TouchableOpacity style={styles.couponButton} onPress={this.onPress} >
            <Image source={{uri: item.link}} style={styles.couponImage}/>
            <Text>{item.title}</Text>
          </TouchableOpacity> }
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  couponButton: {
    width: 110,
    height: 120,
    borderRadius:10,
    backgroundColor: '#ff9625',
  },
  couponImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
