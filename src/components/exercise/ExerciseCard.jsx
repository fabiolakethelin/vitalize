import { Link } from 'react-router-dom'
import { Container, Buttons } from './ExerciseCard.style';

const ExerciseCard = ({exercise}) => {
  return (
    <Container>
      <Link to={`/exercise/${exercise.id}`}>
        <h5>{exercise.name}</h5>

        <img src={exercise.gifUrl} alt={exercise.name} />

        <Buttons>
          <button className='btn bodyPart'>{exercise.bodyPart}</button>
          <button className='btn target'>{exercise.target}</button>
        </Buttons>
      </Link>
    </Container>
  );
};

export default ExerciseCard;