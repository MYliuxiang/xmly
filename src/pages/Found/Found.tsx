import React, {Component} from 'react';
import {Text, View, Button, StatusBar, SafeAreaView} from 'react-native';
import {RootStackNavigationProp} from '../../navigator';
import CusCom from './CusCom'

interface Iprops {
  navigation: RootStackNavigationProp;
}

class Found extends Component<Iprops> {
  constructor(props: Iprops) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="white" />
        <View>
          <Text> 发现 </Text>
          <Button title="点击跳进详情" onPress={this.onclick} />
          <CusCom name="wo shi ">
            <Text>asfiwhefipwh</Text>
            <Text>feoifjoefj</Text>
          </CusCom>
        </View>
      </SafeAreaView>
    );
  }

  onclick = () => {
    const {navigation} = this.props;
    navigation.navigate('MDetail', {});
    // this.loadData(true);
  };
}

export default Found;
