import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

const OTP = ({navigation}) => {
  let textInput = useRef(null);
  let clockCall = null;
  const lengthInput = 4;
  const defaultCountdown = 5;
  const [InternalVal, setInternalValue] = useState('');
  const [countdown, setCountdown] = useState(defaultCountdown);
  const [enableResend, setEnableResend] = useState(false);

  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000);
    return () => {
      clearInterval(clockCall);
    };
  });

  const decrementClock = () => {
    if (countdown === 0) {
      setEnableResend(true);
      setCountdown(0);
      clearInterval(clockCall);
    } else {
      setCountdown(countdown - 1);
    }
  };

  const onChangeText = (val) => {
    setInternalValue(val);
    if (val.length === lengthInput) {
      navigation.navigate('Home');
    }
  };

  const onResend = () => {
    if (enableResend) {
      setCountdown(defaultCountdown);
      setEnableResend(false);
      clearInterval(clockCall);
      clockCall = setInterval(() => {
        decrementClock();
      }, 1000);
    }
  };

  const onChangeNumber = () => {
    setInternalValue('');
  };

  useEffect(() => {
    textInput.focus();
  });

  return (
    <Container>
      <Keyboard keyboardVerticalOffset={50} behavior={'padding'}>
        <Tagline>Please input your mobile number</Tagline>
        <Input>
          <InputText
            ref={(input) => (textInput = input)}
            onChangeText={onChangeText}
            value={InternalVal}
            maxLength={lengthInput}
            returnKeyType="done"
            keyboardType="numeric"
          />
          <ContainerInput>
            {Array(lengthInput)
              .fill()
              .map((data, index) => (
                <CellView
                  key={index}
                  style={{
                    borderBottomColor:
                      index === InternalVal.length ? '#FB6C6A' : '#234DB7',
                  }}>
                  <CellText onPress={() => textInput.focus()}>
                    {InternalVal && InternalVal.length > 0
                      ? InternalVal[index]
                      : ''}
                  </CellText>
                </CellView>
              ))}
          </ContainerInput>
        </Input>
        <BottomView>
          <BottomChange onPress={onChangeNumber}>
            <ChangeNumber>
              <TextChange>Change Number</TextChange>
            </ChangeNumber>
          </BottomChange>
          <BottomResend onPress={onResend}>
            <ResendNumber>
              <TextResend style={{color: enableResend ? '#234DB7' : 'gray'}}>
                Resend ({countdown})
              </TextResend>
            </ResendNumber>
          </BottomResend>
        </BottomView>
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

const Input = styled.View``;

const InputText = styled.TextInput`
  width: 0;
  height: 0;
`;

const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CellView = styled.View`
  width: 40px;
  margin: 5px;
  justify-content: center;
  align-items: center;
  padding: 11px 0;
  border-bottom-width: 1.5px;
`;

const CellText = styled.Text`
  text-align: center;
  font-size: 16px;
`;

const BottomView = styled.View`
  flex-direction: row;
  align-items: flex-end;
  flex: 1;
  margin-bottom: 50px;
`;

const BottomChange = styled.TouchableOpacity``;
const BottomResend = styled.TouchableOpacity``;

const ChangeNumber = styled.View`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  align-items: flex-start;
  justify-content: center;
`;

const TextChange = styled.Text`
  align-items: center;
  font-size: 16px;
`;

const ResendNumber = styled.View`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  align-items: flex-end;
  justify-content: center;
`;

const TextResend = styled.Text`
  align-items: center;
  font-size: 16px;
`;

export default OTP;
