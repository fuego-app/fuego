import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, FlatList, ActivityIndicator, Text, ScrollView} from 'react-native';
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
          renderItem={({item}) =>  <TouchableOpacity style={{width: 110, height: 160, borderRadius:10, backgroundColor: '#ff9625', justifyContent: 'center', alignItems: 'center'}} onPress={this.onPress} >
            <Image source={{uri: item.link}} style={{width: 100, height: 100, resizeMode: 'contain'}}/>
            <Text> {item.title} </Text>
          </TouchableOpacity> }
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }

}
