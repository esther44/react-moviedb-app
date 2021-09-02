import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';

import Movies from "./pages/Movies/Movies";
import MovieDetail from './pages/MovieDetail/MovieDetail';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
          <Switch>
            <Route path='/movies/:id' component={MovieDetail} />
            <Route path='/movies' component={Movies} />
            <Route component={Movies} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
