import './App.css';
import Header from './Header';
import Bar from './Bar';
import Pie from './Pie';
import Line from './Line';

function App() {
  return (
    <div className='App'>
      <Header/>
      <div className="chart">
        <Bar/>
        <Pie />
        <Line />
      </div>
    </div>
  );
}

export default App;
