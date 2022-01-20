import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { About, Home, Recruit } from './pages';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/recruit">
            <Recruit />
          </Route>
          <Route path="/contact">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
