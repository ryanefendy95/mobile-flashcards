import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Container, Item, Input, Content, Form } from 'native-base';
import { addCardtoDeck } from '../utils/storage';

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

  state = {
    question: '',
    answer: ''
  };

  handleQuestionChange = question => {
    this.setState(() => ({ question }));
  };

  handleAnswerChange = answer => {
    this.setState(() => ({ answer }));
  };

  handlePress = async () => {
    const title = this.props.navigation.getParam('title', 'NO TITLE');
    // console.tron.log(this.state.question, this.state.answer);
    await addCardtoDeck(title, { question: this.state.question, answer: this.state.answer });
    this.props.navigation.pop();
  };

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Form>
            <Item fixedLabel>
              {/* <Label>Username</Label> */}
              <Input placeholder="Question" onChangeText={this.handleQuestionChange} />
            </Item>
            <Item fixedLabel last>
              <Input placeholder="Answer" onChangeText={this.handleAnswerChange} />
            </Item>
          </Form>
          <TouchableOpacity style={styles.button} onPress={this.handlePress}>
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
