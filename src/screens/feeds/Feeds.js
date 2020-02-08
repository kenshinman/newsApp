import React from 'react';
import { Container, Content, Body, Header, Text, View, Left, Title, Icon, Button } from "native-base"
import OpenDrawer from '../../components/OpenDrawer';

const Feeds = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <OpenDrawer navigation={navigation} title="Feeds" />
        <Body />
      </Header>
      <Content>
        <Text>Feeds</Text>
      </Content>
    </Container>
  );
}

export default Feeds;