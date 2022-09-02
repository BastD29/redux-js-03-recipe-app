import { combineReducers, legacy_createStore as createStore } from "redux";

import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice";

export const store = createStore(combineReducers({
    allRecipes: allRecipesReducer,
}))