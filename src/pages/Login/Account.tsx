import { NavigationState, PartialState ,Route} from '@react-navigation/native';
import React, {Component} from 'react';
import { Text, View,TouchableOpacity} from 'react-native';
import { ModalStackNavigationProp, RootStackNavigationProp } from '../../navigator';

interface Iprops  {
  navigation: ModalStackNavigationProp;
  id:number;
  nav:object;
  route: Partial<Route<string>> & {
    state?: PartialState<NavigationState>;
  };
}

class Account extends Component<Iprops> {

 
  login = () =>{
    const {navigation} = this.props;
    navigation.navigate('Login');
  }
  render() {
    return (
      <View>
        <Text> 账号 </Text>
        <TouchableOpacity onPress={this.login}>
          <Text>登录</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Account;
