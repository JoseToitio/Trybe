import './App.css';

const taskList = ['jogar bola', 'correr', 'fazer academia', 'academia de luta', 'estudar react', 'estudar logica de programação'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

const allTaks = () => {
  return taskList.map((element) => Task(element));
}

function App() {
  return (
    <div>
      <ul>
        {allTaks()}
      </ul>
    </div>
  );
}

export default App;
