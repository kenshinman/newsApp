import React from "react";
import { Button, Icon, Title, Left } from "native-base";

const OpenDrawer = ({ navigation, title }) => {
  return (
    <Left style={{ flexDirection: "row", alignItems: "center" }}>
      <Button transparent onPress={() => navigation.openDrawer()}>
        <Icon name="menu" />
      </Button>
      <Title style={{ marginLeft: 10 }}>{title || "Title"}</Title>
    </Left>

  );
}

export default OpenDrawer;