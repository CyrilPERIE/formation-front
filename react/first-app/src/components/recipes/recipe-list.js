import React, { useEffect, useState } from 'react';
import './recipe-list.css'
import { MOCK } from '../../data/Mock';
import Recipe from '../recipe/recipe';

export default function Recipes() {
    const useDelete = (props) => {
        
    }

    function useEdit(edit) {
        return !edit
    }

    const [cocktails, setCocktails] = useState(MOCK);
    

    return (
        <div className="show-recipes">
            {cocktails.map((elem) =>
                <Recipe cocktail={elem} onEdit={useEdit} onDelete={useDelete} key={elem.id} />)}
        </div>
    );
}