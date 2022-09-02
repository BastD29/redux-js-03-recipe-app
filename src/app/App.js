import React from 'react';
import getFilteredRecipes from '../utils/utils';
import '../styles/App.css';

import AllRecipes from '../features/allRecipes/AllRecipes';
import SearchTerm from '../features/SearchTerm';
import FavoriteRecipes from '../features/FavoriteRecipes';

export default function App(props) {
  const {state, dispatch} = props;

  const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);

  return (
    <main>
      <section>
        <SearchTerm
          // searchTerm={state.searchTerm}
          // dispatch={dispatch}
        />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes 
          // favoriteRecipes={visibleFavoriteRecipes}
          // dispatch={dispatch}
        />
      </section>
      <hr />
      <section>
        <h2>All Recipes</h2>
        <AllRecipes
          allRecipes={visibleAllRecipes} 
          dispatch={dispatch}
        />
      </section>
    </main>
  )
}
