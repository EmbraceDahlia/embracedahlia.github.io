async function getReceipeNames() {
  try {
    const response = await fetch('https://dummyjson.com/recipes');
    if (response.ok) {
      const data = await response.json();
      const recipes = data.recipes;
      recipes.forEach(recipe => {
        console.log(recipe.name);
      });
    }else{
      console.error("Error:",response.status);
    }
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
}
getReceipeNames();