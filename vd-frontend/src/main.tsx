import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import Navbar from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Navbar />
    <App />
  </Provider>,
);