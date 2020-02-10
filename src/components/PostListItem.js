import React, * as Re from 'react';
import {Card, Text, Icon, CardItem, Left, Body, Thumbnail} from 'native-base';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import HTML from 'react-native-render-html';

const PostListItem = ({post, navigation}) => {
  return (
    <TouchableOpacity onPress={() => alert ('alert')}>
      <Card style={{paddingVertical: 10}}>
        <CardItem style={{paddingRight: 10, paddingLeft: 10}}>
          <Body>
            <Image
              source={{uri: post.x_featured_media_medium}}
              style={{
                height: 200,
                width: '100%',
                flex: 1,
              }}
            />
            <HTML
              classesStyles={{
                excerpt: {
                  marginTop: -20,
                },
              }}
              html={`<h3>${post.title.rendered}</h3> <div class="excerpt">${post.excerpt.rendered}</div>`}
            />
            {/* <HTML html={post.excerpt.rendered} /> */}
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create ({
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PostListItem;
