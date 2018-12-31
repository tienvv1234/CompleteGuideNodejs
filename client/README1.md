install react app : `npm install -g create-react-app`
create react app: `create-react-app NAMEAPP`
start react app: `npm start`
when we change the package.json we need stop and restart the server

use https://materializecss.com/, https://material-ui.com
- if we import file isn't javascript we need to specific the extendsion of file.
- in from statement if we do not use  the ./ the webpack will understand that we want to use the library in the node module

- index.js is root file, this  file is going to contain the initial boot up logic for the react side and redux side of our application (redux stuff)
- app.js will set of components to show on the screen, this is going to be the primary location for setting up all of our react router

#setup react
- npm install --save redux react-redux react-router-dom
- reactDOM.render will take 2 arguments, the first is our root component and then the second is where we are attempting to render that component(public/index.html) `<div id="root"></div>` ==> `document.querySelector("#root")`

import statement from wepack and babel fontend react
required statement from common js backend nodejs

react <App /> using GSX tags

#react, redux, react-redux
- redux store is where all of our state exists to detemine our current state or to change our state
- action creator which dispatches an action the action is sent to all the different reducers inside of our application
- combineReducers combine those reducers together and update state in our redux store

#behind the scenes inside of index.js
- we are going to create our redux store and we are also going to render a provider tag(is react component that is provided to us by the react redux lib)
NOTE: react redux lib is lib whose sole purpose is to make sure that react and redux work together nicely(là 1 cái keo kết dính giữ react và redux)

// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
create instance of redux store, first argument is all the reducers 

anytime the redux store gets some new states produced inside of it, the Provider will inform al lof it's children components, so essentially everything that the app renders that some new state is avaiable and it will update all of those different components with the new state

- file name lowercase to indicate that we are  going to export a function `as opposed to` a component class or something like that 

- authReducer this file export a function, the function we called with 2 arguments
- the first will be our state object that is responsible for this reducer
- the second object would be our action object
- inside of the reducer, we will switch over the actions type
- index.js in we are going to import the author reducer into here and combined it with a combined reducers call
- pass reducers to createStore

- npm run build is build production and all file will go to clien/build/static/

#redux form
just react: we would have to store all this data right here on the lead (SurveyField)(the lead is the lowest common parent(SurveyNew Component))
redux: easier every single time that a user enters some input into a survey field maybe that calls an action creator and updates the state and redux, call typing calls action creator, updates state in redix store, so maybe the redux store will contain the text from each of these fields then comunicatiing that data down to the survey form starts to get really easy
we can connect the survey form of view to our redux store just as we have done previously using that connect helper, so we would say in this case survey form review can use connect to pull data out of redux