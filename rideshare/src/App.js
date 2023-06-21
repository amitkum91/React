import './App.css';
import BookRide from './Components/bookRide1';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RideOption from './Components/RideOptions'
import ConfirmBooking from './Components/confirmBooking'
import RideCancel from './Components/rideCancel'
import HoverRating from './Components/Rating'
import Create from './Components/recordRating';
import GiveRatingLater from './Components/giveRatingLater'
import EditRating from './Components/editRating'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div>
       <Router>
        <Switch>
          <Route path="/" exact>
            <BookRide />
          </Route>

          <Route path="/rideOptions" exact>
            <RideOption />
          </Route>

          <Route path="/giveRating" exact>
            <GiveRatingLater />
          </Route>

          <Route path="/editRating" exact>
            <EditRating />
          </Route>

          <Route path="/rideOptions/confirmBooking" exact>
            <ConfirmBooking />
          </Route>

          <Route path="/rideOptions/cancelBooking" exact>
            <RideCancel />
          </Route>

          <Route path="/rideOptions/rateBooking" exact>
            <HoverRating />
          </Route>

          <Route path="/rideOptions/recordRating" exact>
            <Create />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
