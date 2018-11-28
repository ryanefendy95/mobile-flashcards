import { AsyncStorage } from 'react-native';

/**
 * return all of the decks along with their titles, questions, and answers.
 */
const getDecks = async () => {
  try {
    const decks = await AsyncStorage.getItem('decks');
    return JSON.parse(decks);
  } catch (error) {
    return error;
  }
};

/**
 * take in a single id argument and return the deck associated with that id
 */
const getDeck = async id => {
  try {
    const decks = await AsyncStorage.getItem('decks');
    return JSON.parse(decks)[id];
  } catch (error) {
    return error;
  }
};

/**
 * take in a single title argument and add it to the decks.
 */
const saveDeckTitle = newTitle => {
  const newDeck = {
    newTitle: {
      title: newTitle,
      questions: []
    }
  };
  AsyncStorage.mergeItem('decks', JSON.stringify(newDeck));
};

/**
 * take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
 */
// const addCardtoDeck = (title, card) => {
//     AsyncStorage.mergeItem('decks', JSON.stringify({
//         [title]:
//     }))
// };
