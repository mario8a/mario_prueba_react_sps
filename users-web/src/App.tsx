import { HomePage } from './pages/HomePage';
import { UsersProvider } from './context/UsersProvider';


function App() {
  return (
    <UsersProvider>
      <HomePage />
    </UsersProvider>
  );
}

export default App;
