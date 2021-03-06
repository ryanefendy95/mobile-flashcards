## Views

### Deck List View (Default View)

- [x] displays the title of each Deck
- [x] displays the number of cards in each deck

### Individual Deck View

- [x] displays the title of the Deck
- [x] displays the number of cards in the deck
- [x] displays an option to start a quiz on this specific deck
- [x] An option to add a new question to the deck

### Quiz View

- [x] displays a card question
- [x] an option to view the answer (flips the card)
- [x] a "Correct" button
- [x] an "Incorrect" button
- [x] the number of cards left in the quiz
- [x] Displays the percentage correct once the quiz is complete
- [x] buttons functionality
- [x] Loading screen

### New Deck View

- [x] An option to enter in the title for the new deck
- [x] An option to submit the new deck title
- [x] buttons functionality
- [x] remove bottom navigation

### New Question View

- [x] An option to enter in the question
- [x] An option to enter in the answer
- [x] An option to submit the new question
- [x] buttons functionality

## Data

- [x] use AsyncStorage to store decks and flashcards

## Specific Requirements

- [x] Use create-react-native-app to build your project.
- [x] Allow users to create a deck which can hold an unlimited number of cards.
- [x] Allow users to add a card to a specific deck.
- [x] The front of the card should display the question.
- [x] The back of the card should display the answer.
- [x] Users should be able to quiz themselves on a specific deck and receive a score once they're done.
- [x] Users should receive a notification to remind themselves to study if they haven't already for that day.

## More Specification

- [x] Is the application easy to install and start?
- [x] Does the application include a README with clear installation and launch instructions?
- [x] Is the initial view a Deck List view?
- [x] Does the Deck List view function correctly?
- [x] Does the Individual Deck view display the correct information?
  - [x] The deck title
  - [x] Number of cards in the deck
  - [x] Option to start a quiz for that deck
- [x] Option to add a new question to the deck
- [x] Does the Individual Deck view function correctly?
- [x] Does the New Question view function correctly?
- [x] Does the Quiz View function correctly?
  - [x] The Quiz view starts with a question from the selected deck.
  - [x] The question is displayed, along with a button to show the answer.
  - [x] Pressing the 'Show Answer' button displays the answer.
  - [x] Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'
  - [x] The view displays the number of questions remaining.
  - [x] When the last question is answered, a score is displayed. This can be displayed as a percentage of correct answers or just the number of questions answered correctly.
  - [x] When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
  - [x] Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.
- [x] Does the New Deck view work correctly?
- [x] Does the user receive a notification at a particular time if they haven't studied that day?
- [x] Does the app function correctly in either Android or iOS?
- [x] Is the code well written and reasonably structured?
- [x] Does the code run without errors? Is the code free of warnings?

## Extra Features

- [ ] add emoji 🤩 🤩 🤩
- [ ] for add new card/question, add validation?
- [ ] shuffle quiz questions
- [ ] deck swiper
