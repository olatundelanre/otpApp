import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

const Auth = ({navigation}) => {
  let textInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState();
  const [focusInput, setFocusInput] = useState(true);
  const onChangePhone = (number) => {
    setPhoneNumber(number);
  };
  const onPressContinue = () => {
    if (phoneNumber) {
      navigation.navigate('Otp');
    }
  };
  const onChangeFocus = () => {
    setFocusInput(true);
  };
  const onChangeBlur = () => {
    setFocusInput(false);
  };

  useEffect(() => {
    textInput.focus();
  }, []);

  return (
    <Container>
      <Keyboard keyboardVerticalOffset={50} behavior={'padding'}>
        <Tagline>Please input your mobile number</Tagline>
        <Input style={{borderBottomColor: '#244db7'}}>
          <OpenDialog>
            <Mobile>{'+84 | '}</Mobile>
          </OpenDialog>
          <InputText
            ref={(input) => (textInput = input)}
            placeholder="907 786 5637"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={onChangePhone}
            secureTextEntry={false}
            onFocus={onChangeFocus}
            onBlur={onChangeBlur}
          />
        </Input>
        <ViewBottom>
          <PressButton onPress={onPressContinue}>
            <PressView
              style={{backgroundColor: phoneNumber ? '#244db7' : 'grey'}}>
              <ButtonText>Continue</ButtonText>
            </PressView>
          </PressButton>
        </ViewBottom>
      </Keyboard>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Keyboard = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 10px;
  align-items: center;
`;

const Tagline = styled.Text`
  margin: 50px 0;
  font-size: 20px;
`;

const Input = styled.View`
  flex-direction: row;
  border-radius: 10px;
  padding: 0 16px;
  background-color: white;
  align-items: center;
  border-bottom-width: 1.5px;
`;

const OpenDialog = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Mobile = styled.Text``;

const InputText = styled.TextInput`
  margin-left: 5px;
  height: 50px;
  flex: 1;
`;

const ViewBottom = styled.View`
  flex: 1;
  margin-bottom: 50px;
  justify-content: flex-end;
  align-items: center;
`;

const PressButton = styled.TouchableOpacity``;

const PressView = styled.View`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #244db7;
`;

const ButtonText = styled.Text`
  color: white;
  align-items: center;
`;

export default Auth;
