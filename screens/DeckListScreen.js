import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Body, Content, List, ListItem, Text, Right, H3 } from 'native-base';
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

  constructor(props) {
    super(props);
    this.state = { decks: {} }; // can this be outside of the constructor?
    this.willFocus = this.props.navigation.addListener('willFocus', () => {
      getDecks().then(decks => {
        this.setState({ decks });
      });
    });
  }

  async componentDidMount() {
    await initDeck();
    const decks = await getDecks();
    this.setState({ decks });
  }

  // async obtainNotificationPermission() {
  //   let permission = await Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS);
  //   if (permission.status !== 'granted') {
  //     permission = await Permissions.askAsync(Permissions.USER_FACING_NOTIFICATIONS);
  //     if (permission.status !== 'granted') {
  //       Alert.alert('Permission not granted to show notifications');
  //     }
  //   }
  //   return permission;
  // }

  // async presentLocalNotification(date) {
  //   await this.obtainNotificationPermission();
  //   Notifications.presentLocalNotificationAsync({
  //     title: 'Your Reservation',
  //     body: `Reservation for ${date} requested`,
  //     ios: {
  //       sound: true
  //     },
  //     android: {
  //       sound: true,
  //       vibrate: true,
  //       color: '#512DA8'
  //     }
  //   });
  // }

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
                    title: row.title
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
