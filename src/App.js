import './App.css';
import Navigation from './components/navigation/Navigation';
import Shop from './components/shop/Shop';

function App() {
  return (
    <div className="App bg-gray-100">
      <Navigation></Navigation>
      <Shop></Shop>
    </div>
  );
}

export default App;
