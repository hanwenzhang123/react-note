//seperate function components into modules 
 
 
//index.js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.css';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

//./components

//App.js
import React from 'react';
import Header from './Header';
import Player from './Player';
export default App;

//Header.js
import React from 'react';    //beginning
export default Header;    //bottom


//Player.js
import React from 'react';    //beginning
import Counter from './Counter';
export default Player;    //bottom


//Counter.js
import React from 'react';    //beginning
export default Counter;    //bottom




//questions

To use a global package that's not installed on your computer, you can use ____ to download and execute the package you specify, all in one command.
npx

Do we need to import React into every module that uses React's API and JSX?
yes, each modules has its own scope

Complete the code to export the Application component.
export default Application;

Complete the code to bring in React as a dependency.
import React from 'react';


Use a relative path to import the nav displayed in the footer.
import React from 'react';
import Nav from './Nav';
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h1>The Footer</h1>
        <Nav />
      </footer>
    );
  }
}

Use a named import that imports React and Component from the react package.
import React, { Component } from 'react';
class Nav extends Component {
  ...
}

  
