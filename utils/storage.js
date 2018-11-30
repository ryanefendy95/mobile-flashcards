import { AsyncStorage } from 'react-native';

export const STORAGE_KEY = 'UdaciFlashcards:decks';

const data = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      },
      {
        question: 'question 3',
        answer: 'answer 3'
      },
      {
        question: 'question 4',
        answer: 'answer 4'
      },
      {
        question: 'question 5',
        answer: 'answer 5'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

/**
 * @description fetch all decks from async storage
 * return all of the decks along with their titles, questions, and answers.
 */
export const getDecks = async () => {
  try {
    const decks = await AsyncStorage.getItem(STORAGE_KEY);
    return JSON.parse(decks);
  } catch (error) {
    return error;
  }
};

/**
 * @description fetch specific deck from async storage
 * take in a single id argument and return the deck associated with that id
 * @param { string } title
 */
export const getDeck = async id => {
  try {
    const decks = await AsyncStorage.getItem(STORAGE_KEY);
    return JSON.parse(decks)[id];
  } catch (error) {
    console.tron.logImportant(error);
    return error;
  }
};

/**
 * @description create a new deck by adding it's name as the key to an empty array
 * take in a single title argument and add it to the decks.
 * @param { string } title - Name of deck to create
 */
export const saveDeckTitle = title => {
  AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({ [title]: { title, questions: [] } }));
};

/**
 * @description add a card to a deck
 * take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
 * @param { string } title
 * @param { object } question
 */
export const addCardtoDeck = async (title, question) => {
  try {
    const decks = JSON.parse(await AsyncStorage.getItem(STORAGE_KEY));
    if (decks[title]) {
      decks[title].question.push(question);
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
    }
  } catch (error) {
    console.tron.logImportant(error);
  }
};

/**
 * @description remove a deck from storage
 * @param { string } deck - which deck to remove
 */
export const removeDeck = async deck => {
  const decks = JSON.parse(await AsyncStorage.getItem(STORAGE_KEY));
  decks[deck] = undefined;
  delete decks[deck];
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
};

export const initDeck = async () => {
  let decks;
  try {
    // decks = await getDecks();
    // if (!decks) {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    // }
  } catch (error) {
    console.tron.logImportant(error);
  }
};
