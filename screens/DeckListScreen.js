import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Body, Content, List, ListItem, Text, Left, Right, H3 } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

class DeckListScreen extends Component {
  static navigationOptions = {
    title: 'Deck List',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <List>
            <ListItem button onPress={() => this.props.navigation.navigate('Deck')}>
              {/* <Left /> */}
              <Body>
                <H3 style={styles.text}>Deck 1</H3>
                <Text note>3 cards</Text>
              </Body>
              <Right>
                <Ionicons name="ios-arrow-forward" size={20} />
              </Right>
            </ListItem>

            <ListItem button onPress={() => this.props.navigation.navigate('Deck')}>
              {/* <Left /> */}
              <Body>
                <H3 style={styles.text}>Deck 1</H3>
                <Text note>3 cards</Text>
              </Body>
              <Right>
                <Ionicons name="ios-arrow-forward" size={20} />
              </Right>
            </ListItem>

            <ListItem button onPress={() => this.props.navigation.navigate('Deck')}>
              {/* <Left /> */}
              <Body>
                <H3 style={styles.text}>Deck 1</H3>
                <Text note>3 cards</Text>
              </Body>
              <Right>
                <Ionicons name="ios-arrow-forward" size={20} />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 10
  }
});

export default DeckListScreen;
