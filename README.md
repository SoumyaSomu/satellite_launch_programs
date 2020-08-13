This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to run the project
1. Clone the repository from Github by going to the link.
2. Run 'npm install'
3. Run 'npm start'

## Stacks Used
1.React Js is used for making the application.
2.Redux is used for state Management
3.In case of UI i have used sass to maitain a proper structure of the folder with the usage of latest technology.

## Libraries Used
1. React Bootstrap
2. Node sass
3. React-dom
4. react-redux
5. redux
6. redux-thunk

##  Approach
1. Home page loads which shows details of all the satellites and using fetchsatellites in redux we display the details of each one of them.
2. When a filter of a year is applied it passes the year in redux using update filter and returns the satellites having the entry of that year.
3. When a filter of succesfull launch is appplied if the value is true it returns satellites with successfull launch as true and if the value selected is false it returns satellites with successfull launch as false.
4. When a filter of succesfull landing is appplied if the value is true it returns satellites with successfull landing as true and if the value selected is false it returns satellites with successfull landing as false.
5. Filter will take the value of only one year at a time so if another is selected it will remove the first one.
6. Filter of a single year,successfull landing and successfull launch can be passed together with only value in each one of them.
7. Media queries are used to make the page responsive on each device.
