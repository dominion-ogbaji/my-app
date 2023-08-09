import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

// formik
import { Formik } from 'formik';

import {
  StyledContainer,
  PageLogo,
  PageTitle,
  BottomImage,
  StyledInputLabel,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  InnerContainer,
  ButtonText,
  MsgBox,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  SubTitle,
  FPassword,
  Colors,
} from './../components/styles';
import { View, ActivityIndicator, ScrollView, Image, StyleSheet} from 'react-native';

//colors
const { darkLight, brand, primary } = Colors;

// icon
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';





const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const [googleSubmitting, setGoogleSubmitting] = useState(false);

    


  
    return (
     <ScrollView contentContainerStyle={styles.scrollContent}>
    
        <StyledContainer>
          <StatusBar  />
        <InnerContainer>
            <PageLogo resizeMode="cover" source={require('../assets/img/pngwing2.png')} />
            <SubTitle>Wi Gomarket</SubTitle>
            <PageTitle>Welcome</PageTitle>
            <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email == '' || values.password == '') {
                handleMessage('Please fill in all fields');
                setSubmitting(false);
              } else {
                handleLogin(values, setSubmitting);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
              <StyledFormArea>
                <MyTextInput
                  //label="Email Address"
                  placeholder="Email Address"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  icon="mail"
                />
                <MyTextInput
                  //label="Password"
                  placeholder="Password"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  icon="lock"
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox type={messageType}>{message}</MsgBox>
                <FPassword>Forgot Password?</FPassword>

                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                  </StyledButton>
                )}
                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={primary} />
                  </StyledButton>
                )}

                {googleSubmitting && (
                  <StyledButton disabled={true} google={true}>
                    <ActivityIndicator size="large" color={primary} />
                  </StyledButton>
                )}

                 <ExtraView>
                  <ExtraText>Don't have an account? </ExtraText>
                  <TextLink onPress={() => navigation.navigate('Signup')}>
                    <TextLinkContent>Signup</TextLinkContent>
                  </TextLink>
                </ExtraView>

              
              </StyledFormArea>
            )}
          </Formik>

        </InnerContainer>

        </StyledContainer>
        <BottomImage>
            <Image resizeMode="cover"  source={require('../assets/img/pngwing-2.png')} />
          </BottomImage>
    </ScrollView>

    );
}
    
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
          <LeftIcon>
            <Octicons name={icon} size={30} color={brand} />
          </LeftIcon>
          <StyledInputLabel>{label}</StyledInputLabel>
          <StyledTextInput {...props} />
          {isPassword && (
            <RightIcon
              onPress={() => {
                setHidePassword(!hidePassword);
              }}
            >
              <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
            </RightIcon>
          )}
        </View>
      );
    };
    const styles = StyleSheet.create({
      scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
      },
    });
    
export default Login;