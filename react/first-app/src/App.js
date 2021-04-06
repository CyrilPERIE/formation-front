import logo from './logo.svg';
import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Recipes from './components/recipes/recipe-list';
import { Container } from '@material-ui/core';

function App() {
  return (
    <body>
      <Header />
      <Recipes />
      <Footer />
    </body>
  );
}

export default App;
