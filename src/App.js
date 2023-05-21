import './App.css';
import ColorSchemesExample from './components/Navbar/navbar';
import KitchenSinkExample from './components/Cards/cards'
import Example from './components/Modal/addproduct';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  return (
    <div className="App">
      <ColorSchemesExample />
      <div className='example'>
        <Example />
      </div>
      <KitchenSinkExample />
      <NewExpense /> 
      {/* <Footer/> */}
    </div>
  );
}

export default App;
