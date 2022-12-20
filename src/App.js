import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
/*pages component */
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';


function App() {

  const {mode} = useTheme()
  return (
    <div className={`App ${mode}`}>
    <BrowserRouter>
    <Navbar/>
    <ThemeSelector/>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/create' element={<Create/>} ></Route>
      <Route path='/recipe/:id' element={<Recipe/>} ></Route>
      <Route path='/search' element={<Search/>} ></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
