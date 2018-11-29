import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Body, Content, List, ListItem, Text, Left, Right, H3 } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { initDeck, getDecks } from '../utils/storage';

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

  state = {
    decks: {}
  };

  async componentDidMount() {
    await initDeck();
    const decks = await getDecks();
    this.setState({ decks });
  }

  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <List
            dataArray={Object.values(this.state.decks)}
            keyExtractor={item => item.title}
            renderRow={row => (
              <ListItem
                button
                onPress={() =>
                  this.props.navigation.navigate('Deck', {
                    title: row.title,
                    len: row.questions.length
                  })
                }
              >
                <Body>
                  <H3 style={styles.text}>{row.title}</H3>
                  <Text note>{`${row.questions.length} cards`}</Text>
                </Body>
                <Right>
                  <Ionicons name="ios-arrow-forward" size={20} />
                </Right>
              </ListItem>
            )}
          />
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
