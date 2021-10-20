import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import DetailPage from './pages/Detailpage';

function App() {
  return (
    <div>
        <Router>

          <Navbar/>
          
          <Switch>
            
            <Route exact path="/productos">
              <ItemListContainer/>
            </Route>

            <Route exact path="/productos/:nombre">
              <DetailPage/>
            </Route>

            <Route path="/">
              <Home/>
            </Route>

          </Switch>

        </Router>
    </div>
  );
}

export default App;
