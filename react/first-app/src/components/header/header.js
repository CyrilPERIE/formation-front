
import React from 'react';
import './header.css'

function Header() {

    return (
  
        <div class="header">
        <p>Cocktail</p>
        <button routerLink="/recipes/add">Add Cocktail</button>
    </div>
  
    );
  }
  
  export default Header;