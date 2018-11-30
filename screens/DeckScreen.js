import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Container, H1, H3 } from 'native-base';
import { getDeck, removeDeck } from '../utils/storage';

class DeckScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'NO TITLE'),
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  });

  constructor(props) {
    super(props);
    this.didBlurSubscription;
    this.state = { deck: {} }; // can this be outside of the constructor?
  }

  componentDidMount() {
    this.didBlurSubscription = this.props.navigation.addListener('didFocus', () => {
      // console.tron.log('didFocus', payload);
      const title = this.props.navigation.getParam('title', undefined);
      getDeck(title).then(deck => {
        this.setState({ deck });
      });
    });
  }

  componentWillUnmount() {
    this.didBlurSubscription.remove();
  }

  deleteDeck = async () => {
    await removeDeck(this.state.deck.title);
    this.props.navigation.pop();
  };

  render() {
    if (!this.state.deck || !Object.keys(this.state.deck).length) {
      return <Text>Loading</Text>; // todo better loading
    }

    const title = this.state.deck.title;
    const len = this.state.deck.questions.length;
    return (
      <Container>
        <View style={styles.container}>
          <View>
            <H1 style={{ margin: 10 }}>{title}</H1>
            <H3 style={{ margin: 10 }}>{`${len} cards`}</H3>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('NewQuestion', { title })}
            >
              <Text style={styles.text}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Quiz', { title, len })}
            >
              <Text style={styles.text}>Start Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.deleteDeck}>
              <Text style={styles.text}>Delete Deck</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: '#E53224',
    padding: 15,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10
  },
  text: {
    color: 'white'
  }
});

export default DeckScreen;
