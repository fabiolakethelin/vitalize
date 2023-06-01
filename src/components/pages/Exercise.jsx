import { useStateProvider } from '../../utils/StateProvider';
import { Container, Exercises } from './Exercise.style';
import Search from '../exercise/Search';
import ExerciseCard from '../exercise/ExerciseCard';
import Pagination from '../layout/Pagination';

export const Exercise = () => {

  const [{searchedExercises}] = useStateProvider();

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * 8;
    const endIndex = startIndex + 8

    return (
      searchedExercises.slice(startIndex, endIndex)
    );
  }

  return (
    <Container>
      <h1>Energize Your Body, Transform Your Life</h1>

      <Search />

      <Exercises>
      {getCurrentPageItems().map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise}/>
      ))}
      </Exercises>

      <Pagination items={searchedExercises} />
      
    </Container>
  );
};

export default Exercise;