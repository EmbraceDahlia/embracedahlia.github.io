async function getReceipeNames() {
    try {
      const response = await fetch('https://dummyjson.com/recipes');
      const data = await response.json();
  
      const recipes = data.recipes;
      recipes.forEach(recipe => {
        console.log(recipe.name);
      });
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }
  getReceipeNames();