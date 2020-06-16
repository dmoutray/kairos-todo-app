# Kairos todo app coding challenge

## Running the application
To run this application, clone this repository `https://github.com/dmoutray/kairos-todo-app.git`
`cd` into the folder the application was cloned to.
install node modules `npm install`
run the app via `npm start`

### Session storage 

I made use of the sessionStorage API to keep track of the user is logged in. This meant that page refreshes didn’t affect the username on the main page. 

### Props/controlled components/stateless functional components 

I tried to split the components down as small as possible without feeling fragmented. Most of the components are controlled by props. The state updates in the parent are handled by a series of handler functions. 
Imports are in alphabetical order to make components and functions easier to find. 

### Binding functions 

State handling functions were placed in their own directory to keep the components clutter free. To achieve this I made use of the javascript bind functionality.  

### Spread operator for updates 

I used some of the ES6 shorthand code which boasts a very small footprint, but perhaps at the cost of readability. One feature I particularly like is the spread operator and the object deconstruction, especially when extracting props inside a controlled component. 

### Notification banner 

I added a notification banner to let users know when validation failed. This was controlled by an error state object. 

### Validation 

I added some basic validation to ensure that the required fields had been filled in. 

### Styling 

I spent a good amount of time styling the app from scratch with CSS. I used the same design themes that apper on the Kairos website such as font and color scheme.
I had considered using Bootstrap or Bulma for CSS but I felt it would be more beneficial to showcase my CSS knowledge as well as JavaScript. 

### Routing 

I used the react-router-dom module to handle routing. Some of the route changes required me to pass state so this was achieved with history.pushstate. 
The routing allowed me to make a default route which acted as a not found page. 
