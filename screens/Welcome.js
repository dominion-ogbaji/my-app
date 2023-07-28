import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import { 
  CompanyName,
  WelcomeContainer,
  WelcomeButton,
  Welcome,
  WText,
} from './../components/styles';
import { View, ScrollView, Text, StyleSheet } from 'react-native';


const WelcomePage = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <StatusBar  />
          <WelcomeContainer>
            <Welcome>Welcome to</Welcome>
            <CompanyName>Wi Gomarket</CompanyName>
            <Welcome>Register as</Welcome>
            <WelcomeButton><WText>Buyer</WText></WelcomeButton>
            <WelcomeButton><WText>Seller</WText></WelcomeButton>
            <WelcomeButton><WText>Rider</WText></WelcomeButton>
          </WelcomeContainer>
          
        </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default WelcomePage;