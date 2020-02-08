import React from 'react';
import { Container, Content, Body, Header, Text, View, Left, Title, Icon, Button } from "native-base"
import OpenDrawer from '../../components/OpenDrawer';

const Cart = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <OpenDrawer navigation={navigation} title="Cart" />
        <Body />
      </Header>
      <Content>
        <Text>Cart</Text>
      </Content>
    </Container>
  );
}

export default Cart;