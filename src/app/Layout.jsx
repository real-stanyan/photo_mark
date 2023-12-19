import {View, Text} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main/Main';
import Display from '../pages/Display/Display';
import Frame from '../pages/Frame/Frame';

const Stack = createStackNavigator();

const Layout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Photo Mark',
          }}
        />
        <Stack.Screen
          name="Display"
          component={Display}
          options={{
            title: 'Photo Mark',
          }}
        />
        {/* <Stack.Screen
          name="Frame"
          component={Frame}
          options={{
            title: 'Photo Mark',
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
