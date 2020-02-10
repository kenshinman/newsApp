import React, {useContext} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Container, Content, Header, Body, Text} from 'native-base';
import {PostsContext} from '../../../contexts/PostsContext';
import PostListItem from '../../../components/PostListItem';
import ScreenLoader from '../../../components/ScreenLoader';

const TabContent = ({navigation}) => {
  const {posts, loading} = useContext (PostsContext);
  console.log ({posts, loading});

  if (loading) {
    return <ScreenLoader />;
  }

  return (
    <Container>
      <Content>
        {posts.map (post => {
          return (
            <PostListItem navigation={navigation} post={post} key={post.id} />
          );
        })}
      </Content>
    </Container>
  );
};

export default TabContent;
