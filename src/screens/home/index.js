import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <Center>Home</Center>
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

export default Home;
