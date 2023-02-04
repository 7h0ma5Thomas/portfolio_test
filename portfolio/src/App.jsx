import '@/App.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from '@/pages/Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;