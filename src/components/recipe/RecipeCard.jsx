import { Container } from './RecipeCard.style';
import { Link } from 'react-router-dom';

export default function RecipeCard({item}) {
  return (
    <Container>
      <Link to={`/recipes/${item.id}`}>
        <h4>{item.title}</h4>
        <img src={item.image} alt={item.title}/>
        <p><strong>Calories:</strong> {item.nutrition.nutrients[0].amount} kcal</p>
      </Link>
    </Container>
  )
}



