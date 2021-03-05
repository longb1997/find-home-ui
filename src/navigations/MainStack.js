import HomeScreen from '@feature/Home';
import DetailPost from '@feature/DetailPost';
import LoginScreen from '@feature/Login';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="detail"
        component={DetailPost}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
