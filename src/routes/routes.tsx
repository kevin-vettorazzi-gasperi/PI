import React from 'react';
import { Home } from '../screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarComponent } from '../components/tabBarComponent'
import theme from '../global/theme';

export default function Routes() {
    const Tab = createBottomTabNavigator();

    return (
     
           <Tab.Navigator
              screenOptions={{
                 headerShown: false,
                 tabBarShowLabel: false,
                 tabBarHideOnKeyboard: true,
              }}
           >
              <Tab.Screen
                 name="Home"
                 component={Home}
                 options={{
                    tabBarIcon: ({ focused }) => (
                       <TabBarComponent
                          focusedItem={focused}
                          tabIcon={theme.icons.home}
                          iconName={'Início'}
                       />
                    ),
                 }}
              />

              
      </Tab.Navigator>
    )
}