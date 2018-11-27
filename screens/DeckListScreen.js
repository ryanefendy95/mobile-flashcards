import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

class DeckListScreen extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <List>
            <ListItem button onPress={() => this.props.navigation.navigate('Deck')}>
              <Left>
                <Text>Deck 1</Text>
              </Left>
              <Right>
                <Ionicons name="ios-arrow-forward" size={20} />
              </Right>
            </ListItem>
            <ListItem>
              <Text>Deck 2</Text>
            </ListItem>
            <ListItem>
              <Text>Deck 3</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
export default DeckListScreen;
