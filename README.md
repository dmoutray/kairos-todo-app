## Running the application
The quickest and easiest way to run the application is to visit 
To run the application in development mode, clone this repository 
`cd` into the folder the application was cloned to.
install node modules `npm install`
run the app via `npm start`

### Session storage 

The sessionStorage API is used to keep track of the user's login state. This prevented page refreshes from affecting the username on the home page. 

### Props/controlled components/stateless functional components 

Much of the code is divided into reusable React Components which keeps the codebase clean and easy to read. Most of the components are controlled by props. The state updates in the parent are handled by a series of handler functions. 
Imports are in alphabetical order to make components and functions easier to find. 

### Binding functions 

State handling functions reside in their own directory to keep the components clutter free. This was made possible by the use of the javascript bind functionality.  

### Spread operator for updates 

I used ES6 shorthand code which boasts a very small footprint, but perhaps at the cost of readability. Two features I am particularly fond of are the spread operator and object deconstruction. These two features make extracting props inside a controlled component very clean. 

### Notification banner 

The web app features a notification banner to let users know if the validation has failed. The validation slider is controlled by an error state object which has `status` and `message` properties, which handle element visibility and inner text respectively.

### Validation 

Basic validation is included to ensure that required fields have been filled in. 

### Routing 

I used `react-router-dom` to handle routing for the application. Some route changes require passing state so this was achieved with `history.pushstate`. 
The routing allowed me to make a default route which acted as a 'not found' page. 
