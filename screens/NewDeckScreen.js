import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Item, Input, Content, Form, Label, H1 } from 'native-base';

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
              <Input />
            </Item>
          </Form>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Deck')}
          >
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
