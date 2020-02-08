
import React from 'react';
import { Container, Content, Body, Header, Text, Title, Left, Button, Icon } from "native-base"
import OpenDrawer from '../../components/OpenDrawer';

const ProfileScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <OpenDrawer navigation={navigation} title="Profile" />
        <Body />
      </Header>
      <Content>
        <Text>Profile Screen</Text>
      </Content>
    </Container>
  );
}

export default ProfileScreen;