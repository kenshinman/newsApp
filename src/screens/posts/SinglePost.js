import React, {useState, useEffect, useContext} from 'react';
import {Image, View} from 'react-native';
import {
  Container,
  Content,
  Icon,
  Header,
  Left,
  Body,
  Text,
  Button,
  Title,
} from 'native-base';
import HTML from 'react-native-render-html';
import {PostsContext} from '../../contexts/PostsContext';
import ScreenLoader from '../../components/ScreenLoader';

const SinglePost = ({navigation, route}) => {
  const {fetchPost, fetchPostBySlug} = useContext (PostsContext);
  const [error, setError] = useState (null);
  const [post, setPost] = useState (null);
  const [loading, setLoading] = useState (true);

  // const {} = route.para

  const doFetchPost = async () => {
    setPost (null);
    const {id, slug} = route.params;
    // console.log ({id, slug});
    try {
      let post;
      if (slug) {
        post = await fetchPostBySlug (slug);
      } else if (id) {
        post = await fetchPost (id);
      } else {
        throw new Error ({message: 'Post not found'});
      }
      setPost (post);
      setLoading (false);
    } catch (error) {
      console.log (error);
      setError (error);
      setLoading (false);
    }
  };

  const extractSlugFromLink = link => {
    //check if it is  a mail link
    if (link.includes ('mailto:')) {
      //link out
    } else if (
      link.includes ('https://punchng.com') ||
      link.includes ('https://www.punchng.com')
    ) {
      //then it is a link: process it;
      let slug = link.split ('/')[3];
      return slug;
    }
  };

  const handleLinkPress = (e, href, obj) => {
    const slug = extractSlugFromLink (href);
    navigation.navigate ('Post', {slug});
  };

  useEffect (
    () => {
      doFetchPost ();
    },
    [route.params.id, route.params.slug]
  );

  if (loading) {
    return <ScreenLoader />;
  }

  if (error) {
    return <View><Text>Error: {JSON.stringify (error)}</Text></View>;
  }

  if (post) {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack ()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Post</Title>
          </Body>
        </Header>
        <Content>
          <Image
            source={{uri: post.x_featured_media_medium}}
            style={{width: '100%', height: 280}}
          />
          <Text>{JSON.stringify (route)}</Text>
          <HTML
            classesStyles={{
              title: {
                fontSize: 18,
              },
              htmlContent: {
                padding: 10,
              },
            }}
            tagsStyles={{
              p: {
                fontWeight: '300',
                lineHeight: 24,
                marginBottom: 20,
              },
            }}
            onLinkPress={handleLinkPress}
            html={`<div class="htmlContent"><h3 class="title">${post.title.rendered}</h3>${post.content.rendered}</div>`}
          />
        </Content>
      </Container>
    );
  }
  return (
    <View>
      <Text>Nothing</Text>
    </View>
  );
};

export default SinglePost;
