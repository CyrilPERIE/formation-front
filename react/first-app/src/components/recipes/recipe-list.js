import React from 'react';
import './recipe-list.css'
import { MOCK } from '../../data/Mock';
import Recipe from '../recipe/recipe';

export default function Recipes() {

    return (
        <div class="show-recipes">
            {MOCK.map((elem) =>
            <Recipe {...elem} />)};
        </div>
    );
}