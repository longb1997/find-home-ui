import MainStack from '@navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigationRef } from './refNavigation';
// import AuthStack from './AuthStack';

const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <AuthStack /> */}
      <MainStack />
    </NavigationContainer>
  );
};

export default AppContainer;
