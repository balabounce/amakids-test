import './App.css';
import { GamePage } from '../src/pages';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="container">
      <Provider store={store}>
          <GamePage/>
      </Provider>
    </div>
  );
}

export default App;
