# react-native-portal
This is react native portal that like portal in react


### 安装  
    npm i kkhu-react-native-portal

或

    yarn add kkhu-react-native-portal


### 使用
1.在入口页引入
import Provider, { PortalGate } from 'kkhu-react-native-portal';

2.在入口页面使用
    
     <Provider></Provider>

3.定义portal入口
    
    <PortalGate gateName="home" />

例：
App.js


    import * as React from 'react';
    import { StyleSheet, View } from 'react-native';
    import { NavigationContainer } from '@react-navigation/native';
    import BottomTabNavigator from './navigation/BottomTabNavigator';
    import Provider, { PortalGate } from 'kkhu-react-native-portal';

    export default function App(props) {
      return (
        <View style={styles.container}>
          <Provider>
            <NavigationContainer>
              <BottomTabNavigator />
            </NavigationContainer>
            <PortalGate gateName="home" />
          </Provider>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    });


具体使用的页面

1.引入 import { withWrapTeleport } from 'kkhu-react-native-portal';

2.使用withWrapTeleport包装组件，这样props下就有teleport方法了

3.在触发的地方使用teleport发送你需要显示的组件到任何地方
    
    props.teleport('home', <Toast />);

例：ProtalDemos.js

    import * as React from 'react';
    import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
    import { withWrapTeleport } from 'kkhu-react-native-portal';

    function Toast() {
      return (<View style={styles.toast}>
        <Text>成功</Text>
      </View>);
    }

    function PortalDemoScreen(props) {
      function showToast() {
        props.teleport('home', <Toast />);
      }
      function hideToast() {
        props.teleport('home', <></>);
      }
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={showToast}><Text>Show Toast</Text></TouchableOpacity>
          <TouchableOpacity onPress={hideToast}><Text>Hide Toast</Text></TouchableOpacity>
        </View>
      );
    }

    export default withWrapTeleport(PortalDemoScreen);


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff'
      },
      toast: {
        width: 200,
        height: 70,
        backgroundColor: '#cccccc',
        position: 'absolute',
        top: 0,
        marginLeft: 85,
        borderRadius: 10,
        padding: 5,
        alignItems: 'center'
      }
    });
