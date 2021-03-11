import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header"
import Sidebar from "./sidebar/Sidebar"
import styled from "styled-components"

// Style

const AppWrapper = styled.div`
  height: 200vh;
  display: flex;
`
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <AppWrapper>
          <Sidebar/>
          <Switch>
            <Route path="/" exact></Route>
          </Switch>
        </AppWrapper>
      </Router>
    </div>
  );
}
export default App;
