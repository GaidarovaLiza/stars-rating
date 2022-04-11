import './App.css';
import './Star.css'
import Stars from './components/Stars';

function App(props) {
  return (
    <div className='content'>
      <Stars count={4} />
    </div>
  );
}

export default App;
