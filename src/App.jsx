import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GlobalStyle from './globalStyle';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Exercise from './components/pages/Exercise';
import ExerciseInfo from './components/pages/ExerciseInfo';
import Recipes from './components/pages/Recipes';
import RecipeInfo from './components/pages/RecipeInfo'
import About from './components/pages/About';
import { Footer } from './components/layout/Footer';

export const App = () => {

  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise' element={<Exercise />} />
        <Route path='/exercise/:id' element={<ExerciseInfo />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/:id' element={<RecipeInfo />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;