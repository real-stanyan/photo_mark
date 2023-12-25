import {View, Text, Button} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main';
import Display from '../pages/Display';
import Customize from '../pages/Customize';
// import Frame from '../pages/Frame/Frame';

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
            headerTitleStyle: {
              fontFamily: 'RubikDoodleShadow-Regular',
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="Display"
          component={Display}
          options={({navigation}) => ({
            title: 'Choose Frame',
            headerTitleStyle: {
              fontFamily: 'Orbitron-VariableFont_wght',
              // fontSize: 30,
            },
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Customize')}
                title="Costomize"
                color="#057cff"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Customize"
          component={Customize}
          options={{
            title: 'Customize',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
