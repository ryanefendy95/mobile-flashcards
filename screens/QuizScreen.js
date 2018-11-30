import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Container, H1, H3 } from 'native-base';
import { getDeck } from '../utils/storage';

class QuizScreen extends Component {
  static navigationOptions = {
    title: 'Quiz',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  state = {
    isQuiz: true,
    deck: {},
    questionNum: 0,
    numOfCorrect: 0
  };

  async componentDidMount() {
    const title = this.props.navigation.getParam('title', undefined);
    const deck = await getDeck(title);
    this.setState({ deck });
  }

  isCorrect = () => {
    this.setState(state => ({
      numOfCorrect: state.numOfCorrect + 1,
      questionNum: state.questionNum + 1
    }));
  };

  isInorrect = () => {
    this.setState(state => ({
      questionNum: state.questionNum + 1
    }));
  };

  render() {
    const len = this.props.navigation.getParam('len', 0);
    if (!this.state.deck || !Object.keys(this.state.deck).length) {
      return <Text>Loading</Text>; // todo better loading
    }

    // no more questions
    if (this.state.questionNum >= this.state.deck.questions.length) {
      return (
        <Container>
          <View style={styles.container}>
            <View style={{ margin: 10, alignItems: 'center' }}>
              <H1 style={{ textAlign: 'center' }}>
                {`Score: ${this.state.numOfCorrect}/${this.state.questionNum}`}
              </H1>
            </View>
          </View>
        </Container>
      );
    }

    const { question, answer } = this.state.deck.questions[this.state.questionNum];
    return (
      <Container>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <H3 style={{ padding: 10 }}>
            {`Score: ${this.state.numOfCorrect}/${this.state.questionNum}`}
          </H3>
          <H3 style={{ padding: 10 }}>{`Question: ${this.state.questionNum + 1}/${len}`}</H3>
        </View>
        <View style={styles.container}>
          <View style={{ margin: 10, alignItems: 'center' }}>
            <H1 style={{ textAlign: 'center' }}>{this.state.isQuiz ? question : answer}</H1>
          </View>
          <View>
            {this.state.isQuiz ? (
              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#87d6ee' }]}
                onPress={() => this.setState({ isQuiz: false })}
              >
                <Text style={styles.text}>View Answer</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#7e9794' }]}
                onPress={() => this.setState({ isQuiz: true })}
              >
                <Text style={styles.text}>View Question</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#008000' }]}
              onPress={this.isCorrect}
            >
              <Text style={styles.text}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#cc0000' }]}
              onPress={this.isInorrect}
            >
              <Text style={styles.text}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 20,
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    // backgroundColor: '#E53224',
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

export default QuizScreen;
