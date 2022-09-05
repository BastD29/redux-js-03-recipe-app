import React from 'react';
// import { createRecipeComponent } from '../../utils/utils';
import { removeRecipe } from './favoriteRecipesSlice';

import Recipe from '../../components/Recipe';
import FavoriteButton from '../../components/FavoriteButton';

export default function FavoriteRecipes(props) {
  const {favoriteRecipes, dispatch} = props;

  const onRemoveRecipeHandler = (recipe) => {
    dispatch(removeRecipe(recipe))
  }

  return (
    <div id='favorite-recipes' className='recipes-container'>
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  )

  function createRecipeComponent(recipe){
    return (
        <Recipe
            recipe={recipe}
            key={recipe.id}
        >
            <FavoriteButton
                onClickHandler={() => onRemoveRecipeHandler(recipe)}
                // icon={unfavoriteIconUrl}
            >
                Remove Favorite
            </FavoriteButton>
        </Recipe>
    )
}
}
