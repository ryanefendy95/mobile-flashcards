import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Container, H1, H3 } from 'native-base';

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
    isQuiz: true
  };

  render() {
    return (
      <Container>
        <H3 style={{ padding: 10 }}>2/2</H3>
        <View style={styles.container}>
          <View style={{ margin: 10, alignItems: 'center' }}>
            <H1 style={{ textAlign: 'center' }}>
              {this.state.isQuiz ? 'Does React Native work with Android?' : 'Yes!'}
            </H1>
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
              onPress={() => alert('Correct')}
            >
              <Text style={styles.text}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#cc0000' }]}
              onPress={() => alert('Incorrect')}
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
    flex: 1,
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
