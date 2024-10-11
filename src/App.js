import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './components';
import AppRoutes from './routes';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
