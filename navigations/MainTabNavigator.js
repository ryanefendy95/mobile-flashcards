import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import DeckListScreen from '../screens/DeckListScreen';
import NewDeckScreen from '../screens/NewDeckScreen';

const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckListScreen
  },
  NewDeck: {
    screen: NewDeckScreen
  }
});

const TabsContainer = createAppContainer(Tabs);

export default TabsContainer;
