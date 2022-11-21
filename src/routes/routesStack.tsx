import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/signIn';

export function RoutesStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
           <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
           />
        </Stack.Navigator>
)
}