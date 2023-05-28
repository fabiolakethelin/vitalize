import { useEffect, useState } from 'react';
import { useStateProvider } from '../../utils/StateProvider';
import { axiosExercise } from "../../utils/AxiosData";
import { Container, Searcher } from './Search.style';
import {IoMdSearch} from 'react-icons/io';

export const Search = () => {

  const [{exercises}, dispatch] = useStateProvider();

  const [search, setSearch] = useState('');

  useEffect(() => {
    const getExercises = async () => {
      const exercises = await axiosExercise('https://exercisedb.p.rapidapi.com/exercises/');
  
      dispatch({type: 'Set_Exercises', exercises: exercises});
      dispatch({type: 'Set_SearchedExercises', searchedExercises: exercises});
    }
  
    getExercises();
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exerciseData = exercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
      );

      dispatch({type: 'Set_SearchedExercises', searchedExercises: exerciseData});

      setSearch('');
    }
  }

  return (
    <Container>
      <Searcher>
        <input
          type='text'
          placeholder='Search Exercises'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())} />
        <IoMdSearch onClick={handleSearch}/>
      </Searcher>
    </Container>
  )
}

export default Search;
