import React, { useState } from 'react';
import './recipe.css'
import '../../index.css'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function Recipe(props) {
  const [edit, setEdit] = useState(false);
  const [recipe, setRecipe] = useState(props.cocktail);

  const createIngredient = () => {
    let cockpy = { ...recipe };
    cockpy.ingredients.push(
      {
        id: '',
        ingredient: {
          id: '',
          name: '',
        },
        quantity: '',
        unit: ''
      }
    )
    setRecipe(cockpy)
  }

  const createInstruction = () => {
    let cockpy = { ...recipe };
    cockpy.instructions.push("")
    setRecipe(cockpy)
  }

  const updateInputValue = (e) => {
    let cockpy = { ...recipe };
    cockpy[e.target.name] = e.target.value;
    setRecipe(cockpy);
  }

  const updateIngredientValue = (e, ing) => {
    let cockpy = { ...recipe };
    if (e.target.name == "name") {
      cockpy.ingredients[cockpy.ingredients.indexOf(ing)].ingredient.name = e.target.value;
    } else {
      cockpy.ingredients[cockpy.ingredients.indexOf(ing)][e.target.name] = e.target.value;
    }
    setRecipe(cockpy);
  }

  const updateInstruction = (e, index) => {
    let cockpy = { ...recipe };
    cockpy.instructions[index] = e.target.value;
    setRecipe(cockpy);
  }

  const deleteIngredient = (ing) => {
    let cockpy = { ...recipe };
    cockpy.ingredients.splice(cockpy.ingredients.indexOf(ing), 1)
    setRecipe(cockpy)
  }

  const deleteInstruction = (ins) => {
    let cockpy = { ...recipe };
    cockpy.instructions.splice(cockpy.instructions.indexOf(ins), 1)
    setRecipe(cockpy)
  }

  return (
    <Card className="card fade-in example-card">
      <CardContent>

        {edit
          ? <input type="text" defaultValue={recipe.name} name="name" type="text" onChange={(e) => updateInputValue(e)} />
          : <Typography class="mat-card-header">
            {recipe.name}
          </Typography>}

        <Typography><br /></Typography>

        <img className="example-header-image" src={recipe.picture} />

        <br />
        {edit
          ? <input type="text" defaultValue={recipe.description} name="description" type="text" onChange={(e) => updateInputValue(e)} />
          : <p>
            {recipe.description}
          </p>}

        <Typography><br /></Typography>
        <p className="bold">Ingredients</p>
        <div>
          {edit
            ?
            recipe.ingredients.map((ing, index) =>
              <div key={ing.id}>Ingredient {index + 1} <FontAwesomeIcon icon={faTrash} color="red" onClick={() => deleteIngredient(ing)} />
                <input type="text" defaultValue={ing.ingredient.name} name="name" type="text" onChange={(e) => updateIngredientValue(e, ing)} />
                <input type="text" defaultValue={ing.quantity} name="quantity" type="text" onChange={(e) => updateIngredientValue(e, ing)} />
                <input type="text" defaultValue={ing.unit} name="unit" type="text" onChange={(e) => updateIngredientValue(e, ing)} />
                <Typography><br /></Typography>
              </div>)
            :
            recipe.ingredients.map((ing) =>
              <li >
                {ing.ingredient.name} {ing.quantity} {ing.unit}
              </li>)
          }

          {edit
            ?
            <div>
              <FontAwesomeIcon icon={faPlusSquare} size={"2x"} color="#DAF7A6" onClick={() => createIngredient()} />
              <Typography><br /></Typography>
            </div>
            :
            <br />}


          <br />
          <p className="bold">Steps</p>
          <ol>
            {edit
              ?
              recipe.instructions.map((ins, index) =>
                <li key={ins + "a" + index}>
                  <input type="text" defaultValue={ins} name="description" type="text" onChange={(e) => updateInstruction(e, index)} /> <FontAwesomeIcon icon={faTrash} color="red" onClick={() => deleteInstruction(ins)} />
                </li>)
              :
              recipe.instructions.map((ins) =>
                <li >
                  {ins}
                </li>)
            }

            <Typography><br /></Typography>

            {edit
              ?
              <div>
                <FontAwesomeIcon icon={faPlusSquare} size={"2x"} color="#DAF7A6" onClick={() => createInstruction()} />
                <Typography><br /></Typography>
              </div>
              :
              <br />}

          </ol>
        </div>

      </CardContent>

      <CardActions>
        <button onClick={() => setEdit(!edit)}>Edit</button>
        <button onClick={() => props.onDelete(props.cocktail)}>Delete</button>
      </CardActions>

    </Card>

  );
}

export default Recipe;