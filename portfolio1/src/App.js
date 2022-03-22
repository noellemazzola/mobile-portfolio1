import logo from './logo.svg';
import './App.css';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';

function App() {
  return (
    <div className= "App">
      <DurationExercise name= "Test 1"></DurationExercise>
      <RepetitionExercise name= "Test 1"></RepetitionExercise>
    </div>

  );
}

export default App;
