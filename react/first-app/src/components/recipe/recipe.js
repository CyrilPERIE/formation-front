import React from 'react';
import './recipe.css'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Recipe(props) {

  return (

    <Card class="fade-in example-card">

      <CardContent>

        <Typography class="mat-card-header">
          {props.name}
        </Typography>

        <img class="example-header-image" src={props.picture} />

        <br />
        <p class="bold">Ingredients</p>
        <p>
          {props.description}
        </p>
        <div>
          {props.ingredients.map((ing) =>
            <li >
              {ing.name}
              {ing.quantity}
              {ing.unit}
            </li>)
          }
          <br />
          <p class="bold">Steps</p>
          <ol>
            {props.instructions.map((ins) =>
              <li >
                {ins}
              </li>)
            }
          </ol>
        </div>

      </CardContent>

      <CardActions>
        <button>Show Details</button>
      </CardActions>

    </Card>

  );
}

export default Recipe;