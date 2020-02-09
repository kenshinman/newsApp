import React from 'react';
import { Container, Content, Body, Header, Text, View, Left, Title, Icon, Button, StyleProvider } from "native-base"
import OpenDrawer from '../../components/OpenDrawer';
import TopTabs from './tabs';
import getTheme from "../../../native-base-theme/components"
import material from "../../../native-base-theme/variables/material"

const Feeds = ({ navigation }) => {
  return (
    <StyleProvider style={getTheme(material)} >
      <Container>
        <Header>
          <OpenDrawer navigation={navigation} title="Feeds" />
          <Body />
        </Header>
        {/*  */}
        <TopTabs />
      </Container>
    </StyleProvider>
  );
}

export default Feeds;