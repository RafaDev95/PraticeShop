import './App.scss';
import Container from './components/Container.jsx';
import BasketProvider from './context/BasketContext';

function App() {
  return (
    <BasketProvider>
      <div>
        <Container />
      </div>
    </BasketProvider>
  );
}

export default App;
