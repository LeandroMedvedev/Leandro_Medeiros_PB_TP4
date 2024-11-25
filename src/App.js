import { BrowserRouter as Router } from 'react-router-dom';

import { AppProvider } from './contexts';
import { Header } from './components';
import AppRoutes from './routes';

function App() {
  return (
    <div className='App'>
      <Router>
        <AppProvider>
          <Header />
          <AppRoutes />
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
