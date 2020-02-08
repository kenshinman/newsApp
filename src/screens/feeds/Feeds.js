import React from 'react';
import { Container, Content, Body, Header, Text, View, Left, Title, Icon, Button } from "native-base"
import OpenDrawer from '../../components/OpenDrawer';
import TopTabs from './tabs';

const Feeds = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <OpenDrawer navigation={navigation} title="Feeds" />
        <Body />
      </Header>
      <TopTabs />
    </Container>
  );
}

export default Feeds;