import './App.css';
import Counter from './Counter/Counter';

function App() {

  return (
    <div className="App">
                
          <Counter add={1} sub={-1} multiple={2}/>
    </div>
  );
}


export default App;
