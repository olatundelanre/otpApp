import React from 'react';
import styled from 'styled-components';

const OTP = () => {
  return (
    <Container>
      <Center>OTP</Center>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Center = styled.Text``;

export default OTP;
