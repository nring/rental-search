# Rental Search

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) to get off the ground and developing quickly.

[Demo](https://nring.github.io/rental-search)

The majority of the functionality that was specified by the instructions is included in this app. However, a few adjustments were made in order to stay within the time constraints for the project. User input validation, more thorough browser testing, and a loading indicator would have been my next items to tackle (that and some visual design work).

I used React in order to challenge myself. I could have used vanilla JavaScript and ended up with a similar result in less time but I felt this was a perfect opportunity to get more familiar with React. React's speedy rendering would have been more evident if the Hotwire API was a bit faster.

The majority of the application logic is handled in the FormContainer component, which itself contains smaller input and label components to handle user input. Upon receiving the response for the HotWire API, the resulting data is passed back up to the parent App component as state where they are then rendered by the ResultsList component.