import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Container, Item, Input, Content, Form } from 'native-base';

// eslint-disable-next-line react/prefer-stateless-function
class NewQuestionScreen extends Component {
  static navigationOptions = {
    title: 'New Card',
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
            <Item fixedLabel>
              {/* <Label>Username</Label> */}
              <Input placeholder="Question" />
            </Item>
            <Item fixedLabel last>
              <Input placeholder="Answer" />
            </Item>
          </Form>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('NewQuestion')}
          >
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // marginLeft: 10,
    // marginRight: 10,
    // alignItems: 'flex-start'
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: '#E53224',
    padding: 10,
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

export default NewQuestionScreen;
