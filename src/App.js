import './App.css';
import Count from './Count';
import UsersList from './components/UsersList';
import { useDispatch } from 'react-redux';
import {incrementCounter, decrementCounter} from './actions/counterAction';

function App() {
  const dispatch = useDispatch ()

  const handleIncrement = () => {
    dispatch(incrementCounter(2))
  }
  const handleDecrement = () => {
    dispatch (decrementCounter(1))
  }
  return (
    <div className="App">
      <Count/>
      <button onClick = {handleIncrement}> Increment</button>
      <button onClick = {handleDecrement}>Decrement</button>
      <UsersList />
    </div>
  );
}

export default App;
