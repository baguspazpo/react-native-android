
// import a library to help create component
import { Text, AppRegistry, Image, StyleSheet, View, TextInput, Button, Alert, Navigator,
    TouchableHighlight, Picker, BackAndroid} from 'react-native';
import React, {Component} from 'react';
import Register from './src/components/register';
import Login from './src/components/login';
import IdentityCard from './src/components/IdentityCard';

export default class AwesomeProject extends Component {

  _renderScene(route, navigator) {
     var routeId = route.id;

     if (routeId === 'register') {
       return (<Register navigator={navigator}/>);
     }

     if (routeId === 'identityCard') {
       return (<IdentityCard {...route.passProps} navigator={navigator}/>);
     }
  }

  render() {
    return (
        <Navigator
        initialRoute={{ id:'register', name: 'register', component: Register }}
        configureScene={ (route, navigator) => Navigator.SceneConfigs.FloatFromBottomAndroid }
        renderScene={ (route, navigator) => this._renderScene(route, navigator) }
        />
    );
  }


}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
