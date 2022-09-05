import Recipe from "../../components/Recipe";
import FavoriteButton from "../../components/FavoriteButton";

import { loadData } from "./allRecipesSlice";
import { useEffect } from "react";
import { addRecipe } from "../favoriteRecipes/favoriteRecipesSlice";

export default function AllRecipes(props) {
    const { allRecipes, dispatch } = props;
    const onFirstRender = () => {
        dispatch(loadData());
    }
    useEffect(onFirstRender, [dispatch]);

    const onAddRecipeHandler = (recipe) => {
        dispatch(addRecipe(recipe))
    }

    return (
        <div id='all-recipes' className="recipes-container">
        {allRecipes.map((recipe) => (
            <Recipe 
                recipe={recipe} 
                key={recipe.id}
            >
                <FavoriteButton
                    onClickHandler={() => onAddRecipeHandler(recipe)}
                    // icon={favoriteIconURL}
                >
                    Add to Favorites
                </FavoriteButton>
            </Recipe>
        ))}
        </div>
    )
}
