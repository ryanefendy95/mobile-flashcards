import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DeckListScreen from '../screens/DeckListScreen';
import NewDeckScreen from '../screens/NewDeckScreen';
import DeckScreen from '../screens/DeckScreen';
import NewQuestionScreen from '../screens/NewQuestionScreen';

const DeckListStack = createStackNavigator({
  NewQuestion: NewQuestionScreen, // add card
  DeckList: DeckListScreen,
  Deck: DeckScreen
});

DeckListStack.navigationOptions = {
  tabBarLabel: 'Decks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

const NewDeckStack = createStackNavigator({
  NewDeck: NewDeckScreen
});

NewDeckStack.navigationOptions = {
  tabBarLabel: 'Add Deck',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  )
};

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   ),
// };

export default createBottomTabNavigator({
  DeckListStack,
  NewDeckStack
  //   SettingsStack,
});
