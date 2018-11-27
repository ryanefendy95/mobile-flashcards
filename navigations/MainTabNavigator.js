import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import DeckListScreen from '../screens/DeckListScreen';
import NewDeckScreen from '../screens/NewDeckScreen';

const Tabs = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckListScreen,
      navigationOptions: () => ({
        title: `Decks`
      })
    },
    NewDeck: {
      screen: NewDeckScreen,
      navigationOptions: () => ({
        title: `Add Deck`
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: 'titleName',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'DeckList') {
          iconName = `ios-apps`;
        } else if (routeName === 'NewDeck') {
          iconName = `md-add-circle${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

const TabsContainer = createAppContainer(Tabs);

export default TabsContainer;
