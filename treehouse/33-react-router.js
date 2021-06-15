npm install --save react-router-dom

Browser Router - the root routing component, that keeps your UI in sync with URL 
Route - rendering a component in your app, when the URL matches its path.

App.js is the root component of our app, we will write most or our routes here in App.js


//App.js
import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
//App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';

const App = () => (
  <BrowserRouter>
    <div className="container">
    <Header />
      <Route exact path ='/' component={Home} />
      <Route path ='/about' render={ () => <About title='About'/> } /> 
      <Route path ='/teacher' component={Teachers} />
      <Route path ='/courses' component={Courses} />
    </div>
  </BrowserRouter>
);        //path is for url, need exact to render the component only when the path matches URL
//component like <Home /> for that Home.js in the folder
//we use render over component when we needs to pass props to the component you are rendering

export default App;



//About.js
import React from 'react';

const About = (props) => (
  <div className="main-content">
    <h2>{props.title}</h2>
    <p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
  </div>
);

export default About;
 


//Review
Given this code:
<Route exact path="/signup" component={SignupForm} />
Which of the following is true about Route?
  It renders the SignupForm component only when the URL path is exactly '/signup'.

React Router uses JSX syntax to declare routes.
True. React Router is a set of components, and the declarative syntax of JSX makes it easier to visualize how routes are structured.

Which component is one of the core components of React Router and keeps your UI in sync with the URL?
  <BrowserRouter>
  
Which React Router component is responsible for rendering UI (or other components)?
  <Route>
  
Which <Route> prop accepts an inline function that gets called when the URL and path match?
  render
  
Which <Route> prop renders a component only when the path matches the URL exactly?
  exact

  
