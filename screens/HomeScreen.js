import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Fuego'
    header: null,
  };

  constructor() {
    super();
    this.state = {count: 1};
  }

  _incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <View style>
        <Coupon pic = 'https://theaceagency.com/wp-content/uploads/Nekter7.26.1.jpg'/>

        <TouchableOpacity
          style={styles.redButton}
          onPress={ () => this._incrementCount() }
        >
          <Text> Not Interested </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.greenButton}
          onPress={ () => this._incrementCount() }
        >
          <Text> Interested </Text>
        </TouchableOpacity>
      </View>
    );
  }

}

class Coupon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let pic = {
      uri: this.props.pic
    };
    return (
      <View style={styles.container}>
        <Card>
        <Image source={pic} style={{width: Dimensions.get('window').width-20, height: Dimensions.get('window').height-20 , flex: 0.5, resizeMode: 'contain' }}/>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  greenButton: {
    backgroundColor: '#0f0',
    padding: 10,
    position: 'absolute',
    bottom: 15,
    right: 0,
    height: 40,
    width: 120,
    borderRadius: 5,
    textAlign: 'center'
  },

  redButton: {
    backgroundColor: '#f00',
    padding: 10,
    position: 'absolute',
    bottom: 15,
    left: 0,
    height: 40,
    width: 120,
    borderRadius: 5,
    textAlign: 'center'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  couponButton: {
    width: 110,
    height: 120,
    borderRadius:10,
    backgroundColor: '#ff9625',
  },
  couponButtonImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
