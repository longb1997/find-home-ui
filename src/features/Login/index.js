import images from '@resources/icons';
import React, { useState } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import ButtonLogin from 'src/components/ButtonLogin';
import LoginInput from 'src/components/LoginInput';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
// import { Alert } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  // const doSingIn = async () => {
  //   try {
  //     let response = await auth().signInWithEmailAndPassword(user.username, user.password);
  //     if (response && response.user) {
  //       Alert.alert('Success ✅', 'Authenticated successfully');
  //       navigateToHome();
  //     }
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // };

  const navigateToHome = () => navigation.replace('home');

  return (
    <View style={styles.container}>
      <ImageBackground source={images.loginBackground} style={styles.background}>
        <View style={styles.imageLogo}>
          <Image source={images.AppLogo} />
        </View>
        <View style={styles.authForm}>
          <View style={styles.sloganBlock}>
            <Text style={styles.bigTitle}>Welcome</Text>
            <Text style={styles.secondTitle}>Login for enjoy findhome</Text>
          </View>
          <View style={styles.loginForm}>
            <LoginInput
              label={'Email'}
              placeholder={'Your Email'}
              value={user.username}
              onChangeText={(username) => setUser({ ...user, username })}
              autoFocus={true}
            />
            <LoginInput
              label={'Password'}
              placeholder={'Your Password'}
              value={user.password}
              onChangeText={(password) => setUser({ ...user, password })}
              secureTextEntry={true}
            />
            <ButtonLogin label={'login'} onPress={navigateToHome} />
            <View style={styles.forgetPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              <Text style={styles.createNewAccountText}>Create new account</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
