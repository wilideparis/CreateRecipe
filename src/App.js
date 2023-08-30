import './App.css'
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar  from './components/Navbar';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>This App</h1>
      <BrowserRouter>
        <Link>
         <Navbar />
        </Link>
          <Switch>
             <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/search">
                <Search/>
              </Route>
              <Route path="/create">
                <Create/>
              </Route>
              <Route path="/recipe/:id" element={ <Recipe/>}/>
               
             
         </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App
