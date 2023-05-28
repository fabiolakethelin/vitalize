import { useEffect, useState } from 'react';
import { useStateProvider } from '../../utils/StateProvider';
import { Container, Similar_Exercises } from './SimilarExercise.style';
import ExerciseCard from './ExerciseCard'

export const SimilarExercise = ({target, name }) => {

    const [{ exercises }] = useStateProvider();

    const [limitedExercises, setLimitedExercises] = useState([]);

    useEffect(() => {
        if (exercises.length > 0) {
            const exercisesByTarget = exercises.slice(0, 100).filter((exercise) => exercise.target === target && exercise.name !== name);
            const limitedExercises = exercisesByTarget.slice(0, 3);

            setLimitedExercises(limitedExercises);
        }}, [exercises, name]);

return (
    <Container>
        <h2>Similar Exercises</h2>

        <Similar_Exercises>
            {limitedExercises.map((exercise, index) => (
                <ExerciseCard key={index} exercise={exercise}/>
            ))}
        </Similar_Exercises>
    </Container>
)
}

export default SimilarExercise;
