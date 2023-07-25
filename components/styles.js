import styled from 'styled-components';
import { View, Text, TouchableOpacity, TextInput, Image , StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
  primary: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand: '#6D28D9',
  green: '#10B981',
  red: '#EF4444',
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 0px;
  background-color: #FFFFFF;
`;

export const InnerContainer = styled.View`
  width: 100%;
  margin: 0px;
  padding: 0px;
  flex: 1;
  

`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 211px;
  height: 140px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`;

export const PageTitle = styled.Text`
  font-size: 15px;
  text-align: right;
  font-weight: bold;
  color:#FFB800;
  padding: 10px;
  padding-right: 52px;

  ${(props) =>
    props.welcome &&
    `
    font-size: 35px;
  `}
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};

  ${(props) =>
    props.welcome &&
    `
    margin-bottom: 5px;
    font-weight: normal;
  `}
`;

export const StyledTextInput = styled.TextInput`
  background-color: #FFFFFF;
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 20px;
  font-size: 16px;
  height: 56px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
  elevation: 5;
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 10px;
  width: 180px;
  background-color: #3AB44A;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  height: 46px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;

  ${(props) =>
    props.google == true &&
    `
    background-color: ${green};
    flex-direction: row;
    justify-content: center;
  `}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 15px;
 

  ${(props) =>
    props.google == true &&
    `
    color: ${primary};
    padding-left: 15px;
    
    
  `}
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${props => props.type == "SUCCESS" ? green : red};
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const StyledFormArea = styled.View`
  width: 100%;
  padding: 0px 20px 0px 20px;

`;
export const SignupOptions = styled.View `
  margin: auto;
`;
export const SignupText = styled.Text`
  font-size: 10px;
  color: #000000;
  font-weight: 700;
  margin:auto;
  margin-bottom: 20px;
`;
export const SignupIcons = styled.View`
  flex: 1;
  flex-direction: row;
  width: 243.52px;
  Height:46px;
  justify-content: space-between;
  text-align: center;
`;
export const BottomContainer = styled.View`
  width: 47px;
  height: 46px;
  align-items: center;
  justify-content: center;
  background: #AAEBA440;
  border-radius: 23px;


`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`;
export const BottomImage = styled.View`
  width: 180px;
  height: 161px;
  position:absolute;
  bottom: 0;
  right: 0;
  padding: 0px;
`;