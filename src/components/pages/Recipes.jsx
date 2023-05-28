import { useStateProvider } from "../../utils/StateProvider";
import RecipeCard from "../recipe/RecipeCard";
import Search from "../recipe/Search";
import { Recipes_Container, RecipeList } from "./Recipes.style";

export const Recipes = () => {

  const [{recipes}] = useStateProvider();

  return (
    <Recipes_Container>
      <h1>Delightful recipes adjusted to your calorie preferences</h1>
      <p>
        Welcome to our culinary haven where we believe
        that healthy eating should never compromise on taste.
      </p>
      <p>
        Our platform is dedicated to providing you with a vast array of delectable recipes,
        all conveniently filtered based on your specific calorie requirements.
      </p>
      <p>
        Whether you're looking to maintain a balanced lifestyle, shed a few pounds,
        or simply embrace mindful eating, we have the perfect recipe collection for you.
      </p>

      <Search />

    <RecipeList>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} item={recipe} />
      ))}
    </RecipeList>

    </Recipes_Container>
  );
};

export default Recipes;