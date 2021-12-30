import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import App from './markdown-previewer';
import reportWebVitals from './reportWebVitals';

// function CurruntTime(props){
//   return <h1>Currunt Time is {props.time}</h1>
// }
// ------------------------------Currunt Time------------------
// class Timer extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       date: new Date()
//     }
//   }

//   componentDidMount(){
//     this.Id = setInterval(
//       () => this.tick(),
//       1000
//     )
//   }

//   componentWillUnmount(){
//     clearInterval(this.Id)
//   }

//   tick(){
//     this.setState({
//       date: new Date()
//     });
//   }

//   render(){
//     return(
//       <CurruntTime time={this.state.date.toLocaleTimeString()} />
//     )
//   }
// }

// -----------------Toggle----------------
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }


// --------------------------------Log In---------------------
// function UserGreeting(props){
//   return <h1>Wellcome back!</h1>
// }

// function GuestGreeting(props){
//   return <h1>Please! Log in.</h1>
// }

// function Greeting(props){
//   if(props.isLoggedIn){
//    return <UserGreeting />
//   }
//   return <GuestGreeting />
// }

// class LogIn extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       isLoggedIn: false
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isLoggedIn: !prevState.isLoggedIn
//     }));
//   }  

//   render(){
//     return(
//       <div>
//         <Greeting isLoggedIn={this.state.isLoggedIn}/>
//         <button onClick={this.handleClick} >
//           {this.state.isLoggedIn? 'Log Out' : 'Log In'}
//         </button>
//       </div>
//     )
//   }
// }

// ----------------------Lists----------------------
// function List(props){
//   const arr = [1,2,3,4,5,6,7,8,9]
//   const ListItems = arr.map((num) => <li key={num.toString()}>Squre of {num} is {num*num}.</li>)
//   return <ul>{ListItems}</ul>
// }


// --------------------------------------Form-----------------------------------
// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Is going:
//           <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Number of guests:
//           <input name="numberOfGuests" min="0" max="30" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
//         </label>
//         <p>
//           {this.state.numberOfGuests} person/people is/are {this.state.isGoing? "going" : "not going"}.
//         </p>
//       </form>
//     );
//   }
// }

// ------------------------------------Temprature--------------------------------
// const scaleName = {
//   c: 'celcius',
//   f: 'fahrenheit'
// }

// function toCelcius(temp){
//   return (temp - 32) * 5/9;
// }
// function toFahrenheit(temp){
//   return (temp * 9/5) + 32;
// }

// function tryConvert(temp, convert){
//   const temperature = parseFloat(temp);
//   if(Number.isNaN(temperature)){
//     return '';
//   }
//   const output = convert(temperature);
//   const rounded = Math.round(output * 1000) /1000;
//   return rounded;

// }

// function Boiling(props){
//   if(props.celcius >= 100){
//     return <p>Water would boil</p>
//   }
//   return <p>Water would not boil</p>
// }

// class TempInput extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event){
//     this.props.onTempChange(event.target.value)
//   }
//   render(){
//     const scale = this.props.scale;
//     const temperature = this.props.temperature;
//     return(
//       <fieldset>
//         <legend>Enter temperature in {scaleName[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     )
//   }
// }

// class Calculator extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleCelciusChange = this.handleCelciusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {
//       scale: 'c',
//       temperature: ''
//     }
//   }

//   handleCelciusChange(temperature){
//     this.setState({
//       scale: 'c',
//       temperature
//     })
//   }

//   handleFahrenheitChange(temperature){
//     this.setState({
//       scale: 'f',
//       temperature
//     })
//   }

//   render(){
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celcius = scale !== 'c'? tryConvert(temperature, toCelcius) : temperature;
//     const fahrenheit = scale !== 'f'? tryConvert(temperature, toFahrenheit) : temperature;
//     return(
//       <div>
//         <TempInput 
//           scale='c'
//           temperature={celcius}
//           onTempChange = {this.handleCelciusChange}
//         />
//         <TempInput 
//           scale='f'
//           temperature={fahrenheit}
//           onTempChange = {this.handleFahrenheitChange}
//         />
//         <Boiling 
//           celcius={celcius}
//         />
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
