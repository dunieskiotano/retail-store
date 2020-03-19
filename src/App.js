import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { HomeComponent } from "./Components/Home/HomeComponent";
import { AboutComponent } from "./Components/About/AboutComponent";
import { MenComponent } from "./Components/Men/MenComponent";
import { WomenComponent } from "./Components/Women/WomenComponent";
import { AccessoriesComponent } from "./Components/Accessories/AccessoriesComponent";
import { ContactUsComponent } from "./Components/Contact-Us/Contact-UsComponent";
import {LoginComponent} from "./Components/Login/LoginComponent";


function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Switch>
          <Route exact path="/home" component={HomeComponent}><HomeComponent /></Route>
          <Route exact path="/women" component={WomenComponent}><WomenComponent /></Route>
          <Route exact path="/men" component={MenComponent}><MenComponent /></Route>
          <Route exact path="/accessories" component={AccessoriesComponent}><AccessoriesComponent /></Route>
          <Route exact path="/about" component={AboutComponent}><AboutComponent /></Route>
          <Route exact path="/contact-us" component={ContactUsComponent}><ContactUsComponent /></Route>
          <Route exact path="/login" component={LoginComponent}><LoginComponent /></Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
