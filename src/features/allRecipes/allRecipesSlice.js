import allRecipesData from '../../data/data';

export const loadData = () => {
    return {
        type: 'allRecipes/loadData',
        payload: allRecipesData
    }
}

const initialState = [];

export const allRecipesReducer = (allRecipes = initialState, action) => {
    switch (action.type){
        case 'allRecipes/loadData':
            return action.payload;
        default:
            return allRecipes;
    }
}