import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header"
import styled from "styled-components"

// Style

const AppWrapper = styled.div`

`
function App() {
  return (
    <div className="App">
      <Router>
        <AppWrapper>
          <Header/>
          <Switch>
            <Route path="/" exact></Route>
          </Switch>
        </AppWrapper>
      </Router>
    </div>
  );
}
export default App;
