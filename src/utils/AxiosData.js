import axios from 'axios';

export const axiosExercise = async (url) => {
  const response = await axios.get(url, {
    headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_EXERCISE_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }});

  const data = await response.data;

  return data;
}

export const axiosRecipe = async ({params}) => {
  const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
    params: {
      query: params.query,
      apiKey: import.meta.env.VITE_RECIPE_KEY,
      maxCalories: `${params.maxCalories}`,
  }});

  const data = await response.data.results;

  return data;
}

export const axiosRecipeInfo = async ({id}) => {
  const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
    params: {
      apiKey: import.meta.env.VITE_RECIPE_KEY,
  }});

  const data = await response.data;

  return data;
}