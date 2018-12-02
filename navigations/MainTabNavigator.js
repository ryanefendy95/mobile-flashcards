import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DeckListScreen from '../screens/DeckListScreen';
import NewDeckScreen from '../screens/NewDeckScreen';
import DeckScreen from '../screens/DeckScreen';
import NewQuestionScreen from '../screens/NewQuestionScreen';
import QuizScreen from '../screens/QuizScreen';

const DeckListStack = createStackNavigator({
  DeckList: DeckListScreen,
  Deck: DeckScreen,
  NewQuestion: NewQuestionScreen, // add card
  Quiz: QuizScreen
});

// DeckListStack.navigationOptions = {
//   tabBarLabel: 'Decks',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   )
// };

DeckListStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {
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

  // if (routeName === '4') {
  //   navigationOptions.tabBarVisible = false;
  // }

  switch (routeName) {
    case 'DeckList':
      navigationOptions.tabBarVisible = true;
      break;
    case 'Deck':
    case 'NewQuestion':
    case 'Quiz':
      navigationOptions.tabBarVisible = false;
      break;
    default:
      console.tron.log(`route ${routeName} doesn't exist`);
  }

  return navigationOptions;
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
