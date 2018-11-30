import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Item, Input, Content, Form, Label, H1 } from 'native-base';
import { saveDeckTitle } from '../utils/storage';

class NewDeckScreen extends Component {
  static navigationOptions = {
    title: 'New Deck',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  state = {
    title: ''
  };

  handleTitleChange = title => {
    this.setState(() => ({ title }));
  };

  handlePress = async () => {
    await saveDeckTitle(this.state.title);
    this.props.navigation.navigate('Deck', { title: this.state.title });
    this.setState({ title: '' });
  };

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Form>
            <View style={{ margin: 10, alignItems: 'center' }}>
              <H1 style={{ textAlign: 'center' }}>What is the title of your new deck?</H1>
            </View>
            <Item stackedLabel>
              <Label>Deck Title</Label>
              <Input onChangeText={this.handleTitleChange} />
            </Item>
          </Form>
          <TouchableOpacity style={styles.button} onPress={this.handlePress}>
            <Text style={styles.text}>Create Deck</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default NewDeckScreen;
