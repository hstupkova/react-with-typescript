import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Todos items={['learn React', 'learn TypeScript']} />
    </div>
  );
}

export default App;
