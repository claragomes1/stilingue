import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pesquisa from './pages/Pesquisa';



function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route path="/" component={Pesquisa}>
      </Route>
    </Switch>
   </BrowserRouter>
   
  );
}

export default App;
