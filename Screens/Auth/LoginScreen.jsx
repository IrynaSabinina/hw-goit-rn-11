import { useState } from 'react';
// import { Dimensions, StyleSheet } from 'react-native';

import {
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import backgroundImg from '../../assets/img/background.jpg';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSecureText, setIsSecureText] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [currentFocused, setCurrentFocused] = useState('');

  const clearUserForm = () => {
    setEmail('');
    setPassword('');
  };

  const onSubmitUserRegister = () => {
    if (!email.trim() || !password.trim()) return console.warn('Будь ласка заповніть поля');

    console.log({ email, password });

    handleKeyboardHide();
    clearUserForm();
  };

  const handleFocus = (currentFocusInput = '') => {
    setIsShowKeyboard(true);
    setCurrentFocused(currentFocusInput);
  };

  const handleKeyboardHide = () => {
    setIsShowKeyboard(false);
    setCurrentFocused('');
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ImageBackground source={backgroundImg} style={styles.bgContainer}>
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>Увійти</Text>
            <TextInput
              style={{
                ...styles.input,
                backgroundColor: currentFocused === 'email' ? '#ffffff' : '#f6f6f6',
                borderColor: currentFocused === 'email' ? '#ff6c00' : '#e8e8e8',
              }}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#bdbdbd"
              autoComplete="email"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              onFocus={() => handleFocus('email')}
            />
            <View
              style={{
                ...styles.passWrapper,
                marginBottom: isShowKeyboard ? 92 : 43,
              }}
            >
              <TextInput
                style={{
                  ...styles.input,
                  ...styles.inputLast,

                  backgroundColor: currentFocused === 'password' ? '#ffffff' : '#f6f6f6',
                  borderColor: currentFocused === 'password' ? '#ff6c00' : '#e8e8e8',
                }}
                placeholder="Пароль"
                placeholderTextColor="#bdbdbd"
                autoComplete="password"
                autoCapitalize="none"
                secureTextEntry={isSecureText}
                value={password}
                onChangeText={setPassword}
                onFocus={() => handleFocus('password')}
              />
              <TouchableOpacity
                style={styles.btnPassShow}
                onPress={() => password !== '' && setIsSecureText(prevState => !prevState)}
              >
                <Text style={styles.btnPassShowText}>Показати</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btn} onPress={onSubmitUserRegister}>
              <Text style={styles.btnText}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link}>
              <Text style={styles.linkText}>
                Немає акаунту? <Text style={styles.linkTextUnderline}>Зареєструватися</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

