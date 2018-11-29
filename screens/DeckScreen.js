import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Container, H1, H3 } from 'native-base';

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Deck 1',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  render() {
    const title = this.props.navigation.getParam('title', 'NO TITLE');
    const len = this.props.navigation.getParam('len', 0);
    return (
      <Container>
        {/* <Header>
          <Left />
          <Body>
            <Title>Deck 1</Title>
          </Body>
          <Right />
        </Header> */}
        {/* <Content> */}
        <View style={styles.container}>
          <View>
            <H1 style={{ margin: 10 }}>{title}</H1>
            <H3 style={{ margin: 10 }}>{`${len} cards`}</H3>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('NewQuestion')}
            >
              <Text style={styles.text}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Quiz')}
            >
              <Text style={styles.text}>Start Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => alert('Delete Deck')}>
              <Text style={styles.text}>Delete Deck</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </Content> */}
      </Container>
    );

    // return (
    // <View style={styles.container}>
    //   <View style={[styles.box]} />
    //   {/* <View style={[styles.box, { alignSelf: 'flex-end' }]} /> */}
    //   <View style={[styles.box]} />
    //   <View style={[styles.box]} />
    // </View>
    // );
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
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#E76E63',
    margin: 10
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
