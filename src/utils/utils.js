export function getFilteredRecipes(recipes, searchTerm) {
    // console.log(recipes)
    // return recipes.filter(recipe => recipe.name.toLowerCase());
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
    // return recipes.map(recipe => console.log(recipe.name))
}